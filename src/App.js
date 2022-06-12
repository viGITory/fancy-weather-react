import './App.css';

import { useEffect, useState } from 'react';

const App = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLat(pos.coords.latitude);
        setLong(pos.coords.longitude);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=a8122fbe52b443584fbcba6f23095ca1`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeatherData(data);
          console.log(data);
        });
    };

    getData();
  }, [lat, long]);

  return <div className="app"></div>;
};

export default App;
