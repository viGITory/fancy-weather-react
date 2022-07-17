import './Search.css';
import { useState } from 'react';
import axios from 'axios';

import HoverGlow from '../HoverGlow/HoverGlow';
import VoiceSearch from '../VoiceSearch/VoiceSearch';

import { WEATHER_API_KEY } from '../../api/apiKeys';
import translate from '../../data/translate';

import addRippleEffect from '../../utils/addRippleEffect';
import getCursorPos from '../../utils/getCursorPos';
import setBackground from '../../utils/setBackground';
import getWeatherData from '../../api/getWeatherData';
import getLocationData from '../../api/getLocationData';
import getImageData from '../../api/getImageData';
import getCountryFlag from '../../utils/getCountryFlag';

const Search = ({
  appState,
  searchValue,
  searchError,
  voiceWeatherText,

  setLocation,
  setWeatherData,
  setSearchValue,
  setSearchError,
}) => {
  const [glow, setGlow] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { lang, units } = appState;

  const getWeather = async (searchValue) => {
    if (!searchValue) return;

    setIsLoading(!isLoading);

    try {
      // ### only to get coords & location name by city input
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&lang=${lang}&appid=${WEATHER_API_KEY}&units=${units}`
      );
      // ###
      const [lat, long] = [data.coord.lat, data.coord.lon];

      const weatherData = await getWeatherData(lat, long, lang, units);
      const { city, country, country_code, timezone } = await getLocationData(
        lat,
        long,
        lang
      );
      const imageData = await getImageData(timezone, lat);
      const flagUrl = await getCountryFlag(country_code);

      if (weatherData) setTimeout(() => setIsLoading(false), 1000);

      setLocation({
        coords: { lat, long },
        city,
        country,
        country_code,
        timezone,
        flagUrl,
      });
      setWeatherData(weatherData);
      setSearchError('');

      setBackground(imageData);
    } catch (err) {
      setTimeout(() => setIsLoading(false), 1000);

      err.response.status === 404
        ? setSearchError(translate[lang].search.errors[404])
        : setSearchError(translate[lang].search.errors.other);
    }
  };

  return (
    <div className="search">
      <div className="search__wrapper">
        <input
          className="search__input"
          type="text"
          value={searchValue}
          onInput={(e) => setSearchValue(e.target.value)}
          onKeyUp={(e) => {
            if (e.code === 'Enter') getWeather(searchValue);
          }}
          placeholder={translate[lang].search.input}
          aria-label={translate[lang].search.input}
        />
        {isLoading && (
          <img
            className="search__loading-icon"
            src="./assets/weather-icons/hurricane.svg"
            alt="hurricane"
          />
        )}
        {searchError && !isLoading && (
          <p className="search__error">{searchError}</p>
        )}
      </div>
      <VoiceSearch
        appState={appState}
        voiceWeatherText={voiceWeatherText}
        getWeather={getWeather}
        setSearchValue={setSearchValue}
      />
      <button
        className="search__button"
        type="button"
        onClick={(e) => {
          getWeather(searchValue);
          addRippleEffect(e);
        }}
        onMouseMove={(e) => {
          const pos = getCursorPos(e);
          setGlow({ coordX: pos.x, coordY: pos.y, opacity: 1 });
        }}
        onMouseLeave={() => {
          setGlow({ opacity: 0 });
        }}
      >
        {translate[lang].buttons.search}
        <HoverGlow
          coordX={glow.coordX}
          coordY={glow.coordY}
          opacity={glow.opacity}
        />
      </button>
    </div>
  );
};

export default Search;
