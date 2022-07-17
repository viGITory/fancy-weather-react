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
  const [weatherData, setWeatherData] = useState([]);
  const [location, setLocation] = useState([]);
  const [coords, setCoords] = useState();
  const [currentUserLocation, setCurrentUserLocation] = useState({});
  const [voiceWeatherText, setVoiceWeatherText] = useState('');

  const { locale, lang, units } = appState;

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

      setCoords({ lat, long });
      setCurrentUserLocation({
        coords: { lat, long },
        place: { city, country, flagUrl, country_code },
      });

      setWeatherData(weatherData);
      setLocation({ city, country, flagUrl, country_code });

      setAppState((prevState) => ({
        ...prevState,
        loading: false,
      }));

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
      <Preloader {...appState} />
      <Header
        className={'app__header'}
        appState={appState}
        currentUserLocation={currentUserLocation}
        setCoords={setCoords}
        setLocation={setLocation}
        setWeatherData={setWeatherData}
        setAppState={setAppState}
        timeZone={weatherData.timezone}
        latitude={weatherData.lat}
        voiceWeatherText={voiceWeatherText}
      />
      <main className="main">
        <Location location={location} />
        <DateTime appState={appState} timeZone={weatherData.timezone} />
        <div className="main__wrapper">
          <Weather
            appState={appState}
            weatherData={weatherData}
            location={location}
            setVoiceWeatherText={setVoiceWeatherText}
          />
          {coords && (
            <Map appState={appState} coords={coords} location={location} />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
