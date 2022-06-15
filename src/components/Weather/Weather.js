import './Weather.css';

import Location from '../Location/Location';
import Clock from '../Clock/Clock';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import DailyForecast from '../DailyForecast/DailyForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';

const Weather = ({ weatherData, userLocation }) => {
  return weatherData.current ? (
    <div className="weather">
      <Location userLocation={userLocation} />
      <Clock weatherData={weatherData} />
      <CurrentWeather weatherData={weatherData} />
      <HourlyForecast weatherData={weatherData} />
      <DailyForecast weatherData={weatherData} />
    </div>
  ) : (
    <div></div>
  );
};

export default Weather;
