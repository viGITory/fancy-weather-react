import './App.css';

import { useEffect, useState } from 'react';
import Weather from '../Weather/Weather';
import Preloader from '../Preloader/Preloader';

const App = () => {
  const WEATHER_API_KEY = 'a8122fbe52b443584fbcba6f23095ca1';

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

      await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${WEATHER_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeatherData(data);
          console.log(data);
        });
    };

    getData();
  }, []);

  return weatherData.current ? (
    <div className="app">
      <Weather weatherData={weatherData} />
    </div>
  ) : (
    <div>
      <Preloader />
    </div>
  );
};

export default App;
