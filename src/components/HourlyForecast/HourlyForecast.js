import './HourlyForecast.css';

import getIconSrc from '../../utils/getIconSrc';

const HourlyForecast = ({ weatherData }) => {
  return (
    <ul className="hourly-forecast">
      {[
        ...weatherData.hourly.map((item, index) => {
          return (
            <li
              key={'hourly-forecast-' + index}
              className="hourly-forecast__item"
            >
              <p className="hourly-forecast__time">
                {new Date(item.dt * 1000).toLocaleTimeString().slice(0, -3)}
              </p>
              <img
                className="hourly-forecast__icon"
                src={getIconSrc({
                  iconId: item.weather[0].id,
                  iconCode: item.weather[0].icon,
                })}
                alt={item.weather[0].description}
              />
              <p className="hourly-forecast__temp">{Math.round(item.temp)}°C</p>
            </li>
          );
        }),
      ].slice(1, 6)}
    </ul>
  );
};

export default HourlyForecast;
