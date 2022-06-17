import './CurrentWeather.css';

import getIconSrc from '../../utils/getIconSrc';
import getWindDirection from '../../utils/getWindDirection';
import getBeaufortWindIndex from '../../utils/getBeaufortWindIndex';

const CurrentWeather = ({ weatherData }) => {
  return (
    <div className="current-weather">
      <div className="current-weather__temp-wrapper">
        <p className="current-weather__temp">
          {Math.round(weatherData.current.temp)}
        </p>
        <div className="current-weather__uv">
          <img
            className="current-weather__uv-icon"
            src={getIconSrc({ uvIndex: weatherData.current.uvi })}
            alt={`UV-index ${Math.round(weatherData.current.uvi)}`}
          />
        </div>
      </div>
      <div>
        <img
          className="current-weather__main-icon"
          src={getIconSrc({
            iconId: weatherData.current.weather[0].id,
            iconCode: weatherData.current.weather[0].icon,
          })}
          alt={weatherData.current.weather[0].description}
        />
        <div className="current-weather__wrapper">
          <p className="current-weather__description">
            {weatherData.current.weather[0].description}
          </p>
          <p className="current-weather__feels">
            Feels like: {Math.round(weatherData.current.feels_like)}°
          </p>
          <p className="current-weather__humidity">
            Humidity: {weatherData.current.humidity}%
          </p>
          <p className="current-weather__wind">
            Wind: {weatherData.current.wind_speed.toFixed(1)}m/s
            <img
              className="current-weather__wind-icon"
              src={getIconSrc({
                windSpeed: weatherData.current.wind_speed,
              })}
              alt={`Beaufort wind index ${getBeaufortWindIndex(
                weatherData.current.wind_speed
              )}`}
            />
            {getWindDirection(weatherData.current.wind_deg)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
