import './CurrentWeather.css';
import { useRef, useEffect } from 'react';

import ExtendedForecast from '../ExtendedForecast/ExtendedForecast';

import getIconSrc from '../../utils/getIconSrc';
import getWindDirection from '../../utils/getWindDirection';
import getBeaufortWindIndex from '../../utils/getBeaufortWindIndex';

import translate from '../../data/translate';
import { useState } from 'react';

const CurrentWeather = ({ weatherData, lang }) => {
  const [forecastVisibility, setForecastVisibility] = useState({});
  const [forecastHeight, setForecastHeight] = useState();
  const [rotateDeg, setRotateDeg] = useState();
  const ref = useRef(null);

  useEffect(() => {
    const clientHeight = ref.current.clientHeight;

    setForecastHeight(clientHeight);
    setForecastVisibility({ marginTop: -clientHeight });
  }, []);

  return (
    <div className="current-weather">
      <div className="current-weather__top">
        <div className="current-weather__temp-wrapper">
          <p className="current-weather__temp">
            {Math.round(weatherData.current.temp)}
            <span className="current-weather__deg">°</span>
          </p>
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
              {translate[lang].weather.feels_like}:{' '}
              {Math.round(weatherData.current.feels_like)}°
            </p>
            <p className="current-weather__humidity">
              {translate[lang].weather.humidity}: {weatherData.current.humidity}
              %
            </p>
            <p className="current-weather__wind">
              {translate[lang].weather.wind.name}:{' '}
              {weatherData.current.wind_speed.toFixed(1)}
              {translate[lang].weather.wind.m_s}
              <img
                className="current-weather__wind-icon"
                src={getIconSrc({
                  windSpeed: weatherData.current.wind_speed,
                })}
                alt={`${
                  translate[lang].weather.wind.index
                } ${getBeaufortWindIndex(weatherData.current.wind_speed)}`}
              />
              {getWindDirection(weatherData.current.wind_deg)}
            </p>
            <button
              className="current-weather__button"
              style={{
                transform: `rotate(${rotateDeg}deg)`,
              }}
              onClick={() => {
                if (!forecastVisibility.marginTop) {
                  setForecastVisibility({
                    marginTop: -forecastHeight,
                    opacity: 0,
                  });
                  setRotateDeg(0);
                } else {
                  setForecastVisibility({ marginTop: 0, opacity: 1 });
                  setRotateDeg(180);
                }
              }}
              type="button"
            ></button>
          </div>
        </div>
      </div>
      <div ref={ref}>
        <ExtendedForecast
          visibilityStyles={{
            marginTop: forecastVisibility.marginTop,
            opacity: forecastVisibility.opacity,
          }}
          weatherData={weatherData}
          lang={lang}
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
