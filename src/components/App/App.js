import { useEffect, useState } from 'react';

import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Location from '../Location/Location';
import DateTime from '../DateTime/DateTime';
import Weather from '../Weather/Weather';
import Map from '../Map/Map';

import { WEATHER_API_KEY } from '../../api/apiKeys';
import getApiData from '../../api/getApiData';
import getWeatherData from '../../api/getWeatherData';
import getCurrentPos from '../../utils/getCurrentPos';
import getLocationNameData from '../../api/getLocationNameData';
import setBackground from '../../utils/setBackground';

import locales from '../../data/locales';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [userLocation, setUserLocation] = useState([]);
  const [coords, setCoords] = useState([]);
  const [cityInputValue, setCityInputValue] = useState([]);
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'en');
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');

  const setCityInputState = (e) => {
    const value = e.target.value;

    if (value) setCityInputValue(value);
  };

  const getWeatherByCityName = async () => {
    // ### only to get coords & location name by city input
    const weatherDataByCityName = await getApiData(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInputValue}&lang=${lang}&appid=${WEATHER_API_KEY}&units=metric`
    );
    // ###

    const [lat, long] = [
      weatherDataByCityName.coord.lat,
      weatherDataByCityName.coord.lon,
    ];
    const weatherData = await getWeatherData(lat, long, lang);
    const [city, country] = await getLocationNameData(lat, long, lang);

    setWeatherData(weatherData);
    setUserLocation({
      city,
      country,
    });
    setCoords({ lat, long });

    setBackground();
  };

  const changeLang = (lang) => {
    setLocale(locales[lang]);
    setLang(lang);
  };

  useEffect(() => {
    const getData = async () => {
      const [lat, long] = await getCurrentPos();
      const weatherData = await getWeatherData(lat, long, lang);
      const [city, country] = await getLocationNameData(lat, long, lang);

      setCoords({ lat, long });
      setWeatherData(weatherData);
      setUserLocation({ city, country });
    };

    getData();
    setBackground();

    localStorage.setItem('locale', locale);
    localStorage.setItem('lang', lang);
  }, [lang, locale]);

  return (
    <div className="app">
      <h1 className="visually-hidden">Fancy weather</h1>
      <Preloader lang={lang} />
      <Header
        onBlur={setCityInputState}
        onClick={getWeatherByCityName}
        onChange={changeLang}
        lang={lang}
      />
      <main className="main">
        <div className="main__left">
          <Location userLocation={userLocation} />
          <DateTime
            className={'main__date-time'}
            timeZone={weatherData.timezone}
            locale={locale}
          />
          <Weather weatherData={weatherData} locale={locale} lang={lang} />
        </div>
        <Map coords={coords} timeZone={weatherData.timezone} lang={lang} />
      </main>
    </div>
  );
};

export default App;
