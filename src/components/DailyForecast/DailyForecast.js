import './DailyForecast.css';
import getIconSrc from '../../utils/getIconSrc';

const DailyForecast = ({ weatherData }) => {
  return (
    <ul className="daily-forecast">
      {[
        ...weatherData.daily.map((item, index) => {
          const tempDiff =
            Math.round(item.temp.day) > weatherData.current.temp
              ? 'warmer'
              : Math.round(item.temp.day) < weatherData.current.temp
              ? 'colder'
              : 'equal';

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
              <div className="daily-forecast__description-wrapper">
                <img
                  className="daily-forecast__thermometer"
                  src={getIconSrc({ tempDiff: tempDiff })}
                  alt={tempDiff + ' temp'}
                />
                <p className="daily-forecast__temp">
                  {Math.round(item.temp.day)}°
                </p>
                <img
                  className="daily-forecast__icon"
                  src={getIconSrc({
                    iconId: item.weather[0].id,
                    iconCode: item.weather[0].icon,
                  })}
                  alt={item.weather[0].description}
                />
              </div>
            </li>
          );
        }),
      ].slice(1, 5)}
    </ul>
  );
};

export default DailyForecast;
