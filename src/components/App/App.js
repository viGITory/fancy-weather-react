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
import getLocationNameData from '../../api/getLocationNameData';
import setBackground from '../../utils/setBackground';

import translate from '../../data/translate';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [userLocation, setUserLocation] = useState([]);
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
      const [city, country] = await getLocationNameData(lat, long, lang);

      setCoords({ lat, long });
      setCurrentUserLocation({
        coords: { lat, long },
        place: { city, country },
      });

      setWeatherData(weatherData);
      setUserLocation({ city, country });
    };

    getData();
    setBackground();

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
        setUserLocation={setUserLocation}
        setWeatherData={setWeatherData}
        setLocale={setLocale}
        setLang={setLang}
        setUnits={setUnits}
        units={units}
        lang={lang}
        locale={locale}
        voiceWeatherText={voiceWeatherText}
      />
      <main className="main">
        <Location userLocation={userLocation} />
        <DateTime timeZone={weatherData.timezone} locale={locale} />
        <div className="main__wrapper">
          <Weather
            weatherData={weatherData}
            locale={locale}
            lang={lang}
            setVoiceWeatherText={setVoiceWeatherText}
          />
          <Map coords={coords} timeZone={weatherData.timezone} lang={lang} />
        </div>
      </main>
    </div>
  );
};

export default App;
