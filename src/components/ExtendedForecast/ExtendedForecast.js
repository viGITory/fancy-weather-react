import './ExtendedForecast.css';

import getMoonPhaseNum from '../../utils/getMoonPhaseNum';
import getIconSrc from '../../utils/getIconSrc';
import translate from '../../data/translate';

const ExtendedForecast = ({ weatherData, appState, visibilityStyles }) => {
  const { lang } = appState;
  const moonPhases = Object.keys(translate[lang].weather.moon.phases);

  return (
    <div
      className="extended-forecast"
      style={{
        marginTop: visibilityStyles.marginTop,
        opacity: visibilityStyles.opacity,
      }}
    >
      <div className="extended-forecast__top">
        <div className="extended-forecast__wrapper">
          <img
            className="extended-forecast__icon"
            src={getIconSrc({ uvIndex: weatherData.current.uvi })}
            alt={`${translate[lang].weather.sun.uv} ${Math.round(
              weatherData.current.uvi
            )}`}
          />
          <div>
            <p className="extended-forecast__time-wrapper">
              <span>{`${translate[lang].weather.sun.sunrise}:`}</span>
              <span>
                {new Date(weatherData.daily[0].sunrise * 1000).toLocaleString(
                  'ru-RU',
                  {
                    hour: 'numeric',
                    minute: 'numeric',
                    timeZone: weatherData.timezone,
                  }
                )}
              </span>
            </p>
            <p className="extended-forecast__time-wrapper">
              <span>{`${translate[lang].weather.sun.sunset}:`}</span>
              <span>
                {new Date(weatherData.daily[0].sunset * 1000).toLocaleString(
                  'ru-RU',
                  {
                    hour: 'numeric',
                    minute: 'numeric',
                    timeZone: weatherData.timezone,
                  }
                )}
              </span>
            </p>
          </div>
        </div>
        <table className="extended-forecast__temp">
          <thead>
            <tr>
              <th></th>
              <th>{translate[lang].day_time.morning}</th>
              <th>{translate[lang].day_time.day}</th>
              <th>{translate[lang].day_time.evening}</th>
              <th>{translate[lang].day_time.night}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{translate[lang].weather.temp}</td>
              <td>{Math.round(weatherData.daily[0].temp.morn)}°</td>
              <td>{Math.round(weatherData.daily[0].temp.day)}°</td>
              <td>{Math.round(weatherData.daily[0].temp.eve)}°</td>
              <td>{Math.round(weatherData.daily[0].temp.night)}°</td>
            </tr>
            <tr>
              <td>{translate[lang].weather.feels_like}</td>
              <td>{Math.round(weatherData.daily[0].feels_like.morn)}°</td>
              <td>{Math.round(weatherData.daily[0].feels_like.day)}°</td>
              <td>{Math.round(weatherData.daily[0].feels_like.eve)}°</td>
              <td>{Math.round(weatherData.daily[0].feels_like.night)}°</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="extended-forecast__moon">
        <div className="extended-forecast__wrapper">
          <img
            className="extended-forecast__icon"
            src={'./assets/weather-icons/clear-night.svg'}
            alt={translate[lang].weather.moon.name}
          />
          <div>
            <p className="extended-forecast__time-wrapper">
              <span>{`${translate[lang].weather.moon.moonrise}:`}</span>
              <span>
                {new Date(weatherData.daily[0].moonrise * 1000).toLocaleString(
                  'ru-RU',
                  {
                    hour: 'numeric',
                    minute: 'numeric',
                    timeZone: weatherData.timezone,
                  }
                )}
              </span>
            </p>
            <p className="extended-forecast__time-wrapper">
              <span>{`${translate[lang].weather.moon.moonset}:`}</span>
              <span>
                {new Date(weatherData.daily[0].moonset * 1000).toLocaleString(
                  'ru-RU',
                  {
                    hour: 'numeric',
                    minute: 'numeric',
                    timeZone: weatherData.timezone,
                  }
                )}
              </span>
            </p>
          </div>
        </div>
        <ul className="extended-forecast__phases">
          {moonPhases.map((item, index) => {
            const phaseNum = getMoonPhaseNum(weatherData.daily[0].moon_phase);
            const iconSrc = moonPhases[index].split('_').join('-');

            return (
              <li key={`${item}`}>
                <img
                  className="extended-forecast__phase-icon"
                  src={`./assets/weather-icons/${iconSrc}.svg`}
                  alt={translate[lang].weather.moon.phases[item]}
                  style={{ opacity: `${index === phaseNum ? 1 : 0.4}` }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExtendedForecast;
