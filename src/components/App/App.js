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

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [userLocation, setUserLocation] = useState([]);
  const [coords, setCoords] = useState([]);
  const [cityInputValue, setCityInputValue] = useState([]);

  const setCityInputState = (e) => {
    const value = e.target.value;

    if (value) setCityInputValue(value);
  };

  const getWeatherByCityName = async () => {
    // ### only to get coords & location name by city input
    const weatherDataByCityName = await getApiData(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInputValue}&lang=en&appid=${WEATHER_API_KEY}&units=metric`
    );
    // ###

    const [lat, long] = [
      weatherDataByCityName.coord.lat,
      weatherDataByCityName.coord.lon,
    ];
    const weatherData = await getWeatherData(lat, long);

    setWeatherData(weatherData);
    setUserLocation({
      city: weatherDataByCityName.name,
      country: weatherDataByCityName.sys.country,
    });
    setCoords({ lat, long });

    setBackground();
  };

  useEffect(() => {
    const getData = async () => {
      const [lat, long] = await getCurrentPos();
      const weatherData = await getWeatherData(lat, long);
      const [city, country] = await getLocationNameData(lat, long);

      setCoords({ lat, long });
      setWeatherData(weatherData);
      setUserLocation({ city, country });
    };

    getData();
    setBackground();
  }, []);

  return (
    <div className="app">
      <h1 className="visually-hidden">Fancy weather</h1>
      <Preloader />
      <Header onBlur={setCityInputState} onClick={getWeatherByCityName} />
      <main className="main">
        <div className="main__left">
          <Location userLocation={userLocation} />
          <DateTime
            className={'main__date-time'}
            timeZone={weatherData.timezone}
          />
          <Weather weatherData={weatherData} />
        </div>
        <Map coords={coords} timeZone={weatherData.timezone} />
      </main>
    </div>
  );
};

export default App;
