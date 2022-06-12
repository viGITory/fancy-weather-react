const CurrentWeather = ({ weatherData }) => {
  return (
    <div className="current-weather">
      <p className="current-weather__temp">
        {Math.round(weatherData.current.temp)}°C
      </p>
      <p className="current-weather__icon"></p>
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
    </div>
  );
};

export default CurrentWeather;
