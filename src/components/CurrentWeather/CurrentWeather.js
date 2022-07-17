import './CurrentWeather.css';
import { useRef, useEffect } from 'react';

import ExtendedForecast from '../ExtendedForecast/ExtendedForecast';

import getIconSrc from '../../utils/getIconSrc';
import getWindDirection from '../../utils/getWindDirection';
import getBeaufortWindIndex from '../../utils/getBeaufortWindIndex';

import translate from '../../data/translate';
import { useState } from 'react';

const CurrentWeather = ({
  appState,
  weatherData,
  location,
  setVoiceWeatherText,
}) => {
  const [forecastVisibility, setForecastVisibility] = useState({});
  const [forecastHeight, setForecastHeight] = useState();
  const [rotateDeg, setRotateDeg] = useState();
  const containerTopRef = useRef(null);
  const extendedForecastRef = useRef(null);

  const { lang } = appState;
  const windDirection = getWindDirection(weatherData.current.wind_deg, lang);

  useEffect(() => {
    // space after dot is needed for correct ending of words on selected locale
    const weatherText = [...containerTopRef.current.children]
      .map((child, index) =>
        !index
          ? child.textContent
          : child.innerText
              .split('\n')
              .filter((text) => text)
              .slice(0, -2)
      )
      .flat()
      .join('. ');

    setVoiceWeatherText(
      `${translate[lang].weather.weather_now} ${location.city}, ${location.country}. ` +
        weatherText
    );
  });

  useEffect(() => {
    const clientHeight = extendedForecastRef.current.clientHeight;

    setForecastHeight(clientHeight);
    setForecastVisibility({ marginTop: -clientHeight });
  }, []);

  return (
    <div className="current-weather">
      <div ref={containerTopRef} className="current-weather__top">
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
              <span className="visually-hidden">
                {
                  translate[lang].weather.wind.directions[windDirection]
                    .fullname
                }{' '}
              </span>
              <span>
                (
                {
                  translate[lang].weather.wind.directions[windDirection]
                    .shortname
                }
                )
              </span>
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
            >
              <span className="visually-hidden">
                {translate[lang].buttons.show_more}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div ref={extendedForecastRef}>
        <ExtendedForecast
          visibilityStyles={{
            marginTop: forecastVisibility.marginTop,
            opacity: forecastVisibility.opacity,
          }}
          weatherData={weatherData}
          appState={appState}
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
