import './DailyForecast.css';
import getIconSrc from '../../utils/getIconSrc';

const DailyForecast = ({ weatherData }) => {
  return (
    <ul className="daily-forecast">
      {[
        ...weatherData.daily.map((item, index) => {
          return (
            <li
              key={'daily-forecast-' + index}
              className="daily-forecast__item"
            >
              <p className="daily-forecast__day">
                {new Date(item.dt * 1000).toLocaleDateString('en-EN', {
                  weekday: 'long',
                })}
              </p>
              <p className="daily-forecast__temp">
                {Math.round(item.temp.day)}°C
              </p>
              <img
                className="daily-forecast__icon"
                src={getIconSrc({
                  iconId: item.weather[0].id,
                  iconCode: item.weather[0].icon,
                })}
                alt={item.weather[0].description}
              />
            </li>
          );
        }),
      ].slice(1, 4)}
    </ul>
  );
};

export default DailyForecast;
