import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Location from '../Location/Location';
import DateTime from '../DateTime/DateTime';
import Weather from '../Weather/Weather';
import Map from '../Map/Map';

import createImageTags from '../../utils/createImageTags';
import setBackground from '../../utils/setBackground';

import {
  WEATHER_API_KEY,
  LOCATION_API_KEY,
  IMAGES_API_KEY,
} from '../../api/apiKeys';
import translate from '../../data/translate';

const App = () => {
  const [appState, setAppState] = useState({
    loading: false,
    loadingText: '',
    locale: localStorage.getItem('locale') || 'en-US',
    lang: localStorage.getItem('lang') || 'en',
    units: localStorage.getItem('units') || 'metric',
  });
  const [userCoords, setUserCoords] = useState();
  const [location, setLocation] = useState();
  const [weatherData, setWeatherData] = useState();
  const [voiceWeatherText, setVoiceWeatherText] = useState('');

  const { loading, locale, lang, units } = appState;

  const getApiData = (lat, long) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&lang=${lang}&units=${units}&appid=${WEATHER_API_KEY}`;
    const locationUrl = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&language=${lang}&key=${LOCATION_API_KEY}`;

    setAppState((prevState) => ({
      ...prevState,
      loadingText: translate[lang].api_loading.location,
    }));

    axios
      .get(locationUrl)
      .then((location) => {
        setAppState((prevState) => ({
          ...prevState,
          loadingText: translate[lang].api_loading.weather,
        }));

        const timezone = location.data.results[0].annotations.timezone.name;
        const { country, country_code: countryCode } =
          location.data.results[0].components;

        const city = ['city', 'hamlet', 'county', 'state', 'heritage', 'suburb']
          .map((type) => location.data.results[0].components[type])
          .find((item) => item);

        const imagesUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${IMAGES_API_KEY}&tags=${createImageTags(
          timezone,
          lat
        )}&tag_mode=all&sort=relevance&per_page=500&extras=url_h&format=json&nojsoncallback=1`;

        Promise.all([
          axios.get(weatherUrl).then((response) => {
            setAppState((prevState) => ({
              ...prevState,
              loadingText: translate[lang].api_loading.images,
            }));
            return response;
          }),
          axios.get(imagesUrl),
        ])
          .then(([weather, images]) => {
            setLocation({
              coords: { lat, long },
              city,
              country,
              countryCode,
              timezone,
              flagUrl: `https://flagcdn.com/${countryCode}.svg`,
            });
            setWeatherData(weather.data);

            setBackground(images.data);
          })
          .catch((err) => console.log(err))
          .finally(() =>
            setAppState((prevState) => ({
              ...prevState,
              loading: false,
              loadingText: '',
            }))
          );
      })
      .catch((err) => {
        console.log(err);

        setAppState((prevState) => ({
          ...prevState,
          loading: false,
        }));
      });
  };

  useEffect(() => {
    if (!location) return;

    const { lat, long } = location.coords;
    getApiData(lat, long);

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('locale', locale);
      localStorage.setItem('lang', lang);
      localStorage.setItem('units', units);
    });
  }, [lang, units]);

  useEffect(() => {
    setAppState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        getApiData(latitude, longitude);
        setUserCoords({
          lat: latitude,
          long: longitude,
        });
      },
      (err) => {
        console.log(err);

        setTimeout(() => {
          setAppState((prevState) => ({
            ...prevState,
            loading: false,
          }));
        }, 1000);
      }
    );
  }, []);

  return (
    <div className="app">
      <h1 className="visually-hidden">{translate[lang].project_name}</h1>
      {loading && <Preloader {...appState} />}
      <Header
        className={'app__header'}
        getApiData={getApiData}
        appState={appState}
        userCoords={userCoords}
        weatherData={weatherData}
        location={location}
        voiceWeatherText={voiceWeatherText}
        setAppState={setAppState}
      />
      <main className="main">
        {location && <Location location={location} />}
        {location && <DateTime appState={appState} location={location} />}
        <div className="main__wrapper">
          {weatherData && (
            <Weather
              appState={appState}
              location={location}
              weatherData={weatherData}
              setVoiceWeatherText={setVoiceWeatherText}
            />
          )}
          {location && <Map appState={appState} location={location} />}
        </div>
      </main>
    </div>
  );
};

export default App;
