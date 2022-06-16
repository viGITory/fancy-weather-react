import './App.css';

import { useEffect, useState } from 'react';
import Location from '../Location/Location';
import Clock from '../Clock/Clock';
import Weather from '../Weather/Weather';
import Preloader from '../Preloader/Preloader';

import { WEATHER_API_KEY, IP_API_TOKEN } from '../../api/apiKeys';
import getApiData from '../../api/getApiData';
import setBackground from '../../utils/setBackground';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [userLocation, setUserLocation] = useState([]);

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
      const userLocationData = await getApiData(
        `https://ipinfo.io/json?token=${IP_API_TOKEN}`
      );

      setWeatherData(weatherData);
      setUserLocation(userLocationData);
    };

    getData();
    setBackground();
  }, []);

  return (
    <div className="app">
      <Preloader />
      <main>
        <Location userLocation={userLocation} />
        <Clock weatherData={weatherData} />
        <Weather weatherData={weatherData} userLocation={userLocation} />
      </main>
    </div>
  );
};

export default App;
