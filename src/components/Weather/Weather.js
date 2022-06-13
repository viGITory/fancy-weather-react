import './Weather.css';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import DailyForecast from '../DailyForecast/DailyForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';

const Weather = ({ weatherData }) => {
  return (
    <div className="weather">
      <CurrentWeather weatherData={weatherData} />
      <HourlyForecast weatherData={weatherData} />
      <DailyForecast weatherData={weatherData} />
    </div>
  );
};

export default Weather;
