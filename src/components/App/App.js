import './App.css';
import { useEffect, useState } from 'react';

import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Location from '../Location/Location';
import DateTime from '../DateTime/DateTime';
import Weather from '../Weather/Weather';
import Map from '../Map/Map';

import getWeatherData from '../../api/getWeatherData';
import getCurrentPos from '../../utils/getCurrentPos';
import getLocationData from '../../api/getLocationData';
import getCountryFlag from '../../utils/getCountryFlag';
import getImageData from '../../api/getImageData';
import setBackground from '../../utils/setBackground';

import translate from '../../data/translate';

const App = () => {
  const [appState, setAppState] = useState({
    loading: false,
    locale: localStorage.getItem('locale') || 'en',
    lang: localStorage.getItem('lang') || 'en',
    units: localStorage.getItem('units') || 'metric',
  });
  const [userCoords, setUserCoords] = useState({});
  const [location, setLocation] = useState({});
  const [weatherData, setWeatherData] = useState();
  const [voiceWeatherText, setVoiceWeatherText] = useState('');

  const { loading, locale, lang, units } = appState;

  useEffect(() => {
    setAppState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    const getData = async () => {
      const [lat, long] = await getCurrentPos();
      const weatherData = await getWeatherData(lat, long, lang, units);
      const { city, country, country_code, timezone } = await getLocationData(
        lat,
        long,
        lang
      );
      const flagUrl = await getCountryFlag(country_code);
      const imageData = await getImageData(timezone, lat);

      setAppState((prevState) => ({
        ...prevState,
        loading: false,
      }));
      setUserCoords({ lat, long });
      setLocation({
        coords: { lat, long },
        city,
        country,
        country_code,
        timezone,
        flagUrl,
      });
      setWeatherData(weatherData);

      setBackground(imageData);
    };

    getData();

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('locale', locale);
      localStorage.setItem('lang', lang);
      localStorage.setItem('units', units);
    });
  }, [lang, locale, units]);

  return (
    <div className="app">
      <h1 className="visually-hidden">{translate[lang].project_name}</h1>
      {loading && <Preloader {...appState} />}
      <Header
        className={'app__header'}
        appState={appState}
        userCoords={userCoords}
        location={location}
        voiceWeatherText={voiceWeatherText}
        setAppState={setAppState}
        setLocation={setLocation}
        setWeatherData={setWeatherData}
      />
      <main className="main">
        <Location location={location} />
        <DateTime appState={appState} location={location} />
        <div className="main__wrapper">
          <Weather
            appState={appState}
            location={location}
            weatherData={weatherData}
            setVoiceWeatherText={setVoiceWeatherText}
          />
          {location.coords && <Map appState={appState} location={location} />}
        </div>
      </main>
    </div>
  );
};

export default App;
