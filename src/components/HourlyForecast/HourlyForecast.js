import './HourlyForecast.css';

import getIconSrc from '../../utils/getIconSrc';

const HourlyForecast = ({ weatherData, className }) => {
  return (
    <ul className={`${className ? `${className} ` : ''}hourly-forecast`}>
      {[
        ...weatherData.hourly.map((item, index) => {
          return (
            <li
              key={'hourly-forecast-' + index}
              className="hourly-forecast__item"
            >
              <p>
                {new Date(item.dt * 1000).toLocaleString('ru-RU', {
                  hour: 'numeric',
                  minute: 'numeric',
                  timeZone: weatherData.timezone,
                })}
              </p>
              <img
                className="hourly-forecast__icon"
                src={getIconSrc({
                  iconId: item.weather[0].id,
                  iconCode: item.weather[0].icon,
                })}
                alt={item.weather[0].description}
              />
              <p>{Math.round(item.temp)}°</p>
            </li>
          );
        }),
      ].slice(1, 9)}
    </ul>
  );
};

export default HourlyForecast;
