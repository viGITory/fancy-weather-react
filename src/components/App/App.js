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
import getLocationName from '../../utils/getLocationName';
import setBackground from '../../utils/setBackground';

import translate from '../../data/translate';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [location, setLocation] = useState([]);
  const [coords, setCoords] = useState([]);
  const [currentUserLocation, setCurrentUserLocation] = useState({});
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'en');
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');
  const [units, setUnits] = useState(localStorage.getItem('units') || 'metric');
  const [voiceWeatherText, setVoiceWeatherText] = useState('');

  useEffect(() => {
    const getData = async () => {
      const [lat, long] = await getCurrentPos();
      const weatherData = await getWeatherData(lat, long, lang, units);
      const [city, country, iso_alpha_3] = await getLocationName(
        lat,
        long,
        lang
      );

      setCoords({ lat, long });
      setCurrentUserLocation({
        coords: { lat, long },
        place: { city, country, iso_alpha_3 },
      });

      setWeatherData(weatherData);
      setLocation({ city, country, iso_alpha_3 });

      setBackground(weatherData.timezone, weatherData.lat);
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
      <Preloader lang={lang} />
      <Header
        className={'app__header'}
        currentUserLocation={currentUserLocation}
        setCoords={setCoords}
        setLocation={setLocation}
        setWeatherData={setWeatherData}
        setLocale={setLocale}
        setLang={setLang}
        setUnits={setUnits}
        units={units}
        lang={lang}
        locale={locale}
        timeZone={weatherData.timezone}
        latitude={weatherData.lat}
        voiceWeatherText={voiceWeatherText}
      />
      <main className="main">
        <Location location={location} />
        <DateTime timeZone={weatherData.timezone} locale={locale} />
        <div className="main__wrapper">
          <Weather
            weatherData={weatherData}
            locale={locale}
            lang={lang}
            location={location}
            setVoiceWeatherText={setVoiceWeatherText}
          />
          <Map
            coords={coords}
            timeZone={weatherData.timezone}
            lang={lang}
            location={location}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
