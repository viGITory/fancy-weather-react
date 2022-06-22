import './DailyForecast.css';

import getIconSrc from '../../utils/getIconSrc';
import translate from '../../data/translate';

const DailyForecast = ({ weatherData, locale, lang }) => {
  return (
    <ul className="daily-forecast">
      {[
        ...weatherData.daily.slice(0, 5).map((item, index, arr) => {
          let tempDiff;

          if (index > 0 && index < arr.length) {
            tempDiff =
              Math.round(arr[index - 1].temp.day) >
              Math.round(arr[index].temp.day)
                ? 'colder'
                : Math.round(arr[index - 1].temp.day) <
                  Math.round(arr[index].temp.day)
                ? 'warmer'
                : 'equal';
          }

          return (
            <li
              key={'daily-forecast-' + index}
              className="daily-forecast__item"
            >
              <p className="daily-forecast__day">
                {new Date(item.dt * 1000).toLocaleDateString(locale, {
                  weekday: 'long',
                })}
              </p>
              <div className="daily-forecast__description-wrapper">
                <img
                  className="daily-forecast__thermometer"
                  src={getIconSrc({ tempDiff: tempDiff })}
                  alt={translate[lang].weather.thermometer[tempDiff]}
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
      ].slice(1)}
    </ul>
  );
};

export default DailyForecast;
