import './App.css';

import { useEffect, useState } from 'react';
import Weather from '../Weather/Weather';
import Preloader from '../Preloader/Preloader';

import { WEATHER_API_KEY } from '../../api/apiKeys';
import getApiData from '../../api/getApiData';
import setBackground from '../../utils/setBackground';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);

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

      setWeatherData(weatherData);
    };

    getData();
    setBackground();
  }, []);

  return (
    <div className="app">
      <Preloader />
      <Weather weatherData={weatherData} />
    </div>
  );
};

export default App;
