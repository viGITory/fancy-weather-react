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
