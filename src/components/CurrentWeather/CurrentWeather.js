import './CurrentWeather.css';
import Clock from '../Clock/Clock';

import getIconSrc from '../../utils/getIconSrc';

const CurrentWeather = ({ weatherData }) => {
  return (
    <div className="current-weather">
      <Clock weatherData={weatherData} />
      <p className="current-weather__temp">
        {Math.round(weatherData.current.temp)}°C
      </p>
      <img
        className="daily-forecast__icon"
        src={getIconSrc({
          iconId: weatherData.current.weather[0].id,
          iconCode: weatherData.current.weather[0].icon,
        })}
        alt={weatherData.current.weather[0].description}
      />
      <p className="current-weather__description">
        {weatherData.current.weather[0].description}
      </p>
      <p className="current-weather__feels">
        Feels like: {Math.round(weatherData.current.feels_like)}°C
      </p>
      <p className="current-weather__humidity">
        Humidity: {weatherData.current.humidity}%
      </p>
      <p className="current-weather__wind">
        Wind: {Math.round(weatherData.current.wind_speed)}m/s
      </p>
      <div className="current-weather__uvi">
        <p className="current-weather__uvi-title">UV:</p>
        <img
          className="current-weather__uvi-icon"
          src={getIconSrc({ uvIndex: weatherData.current.uvi })}
          alt={`UV-index ${Math.round(weatherData.current.uvi)}`}
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
