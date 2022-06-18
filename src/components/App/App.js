import { useEffect, useState } from 'react';

import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Location from '../Location/Location';
import DateTime from '../DateTime/DateTime';
import Weather from '../Weather/Weather';
import Map from '../Map/Map';

import { WEATHER_API_KEY } from '../../api/apiKeys';
import getApiData from '../../api/getApiData';
import setBackground from '../../utils/setBackground';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [userLocation, setUserLocation] = useState([]);
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const getCoords = async () => {
        const pos = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        return [pos.coords.latitude, pos.coords.longitude];
      };

      const [lat, long] = await getCoords();
      const weatherData = await getApiData(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${WEATHER_API_KEY}`
      );
      const weatherDataWithCityName = await getApiData(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}`
      );

      setWeatherData(weatherData);
      setUserLocation({
        city: weatherDataWithCityName.name,
        country: weatherDataWithCityName.sys.country,
      });
      setCoords({ lat, long });
    };

    getData();
    setBackground();
  }, []);

  return (
    <div className="app">
      <h1 className="visually-hidden">Fancy weather</h1>
      <Preloader />
      <Header />
      <main className="main">
        <div className="main__left">
          <Location userLocation={userLocation} />
          <DateTime />
          <Weather weatherData={weatherData} userLocation={userLocation} />
        </div>
        <Map coords={coords} />
      </main>
    </div>
  );
};

export default App;
