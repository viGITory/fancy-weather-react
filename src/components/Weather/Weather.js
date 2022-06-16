import './Weather.css';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import DailyForecast from '../DailyForecast/DailyForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';

const Weather = ({ weatherData }) => {
  return weatherData.current ? (
    <div className="weather">
      <CurrentWeather weatherData={weatherData} />
      <HourlyForecast weatherData={weatherData} />
      <DailyForecast weatherData={weatherData} />
    </div>
  ) : (
    <div></div>
  );
};

export default Weather;
