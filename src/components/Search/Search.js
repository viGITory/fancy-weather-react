import './Search.css';
import { useState } from 'react';

import HoverGlow from '../HoverGlow/HoverGlow';
import VoiceSearch from '../VoiceSearch/VoiceSearch';

import { WEATHER_API_KEY } from '../../api/apiKeys';
import translate from '../../data/translate';

import addRippleEffect from '../../utils/addRippleEffect';
import getCursorPos from '../../utils/getCursorPos';
import getApiData from '../../api/getApiData';
import setBackground from '../../utils/setBackground';
import getWeatherData from '../../api/getWeatherData';
import getLocationData from '../../api/getLocationData';
import getCountryFlag from '../../utils/getCountryFlag';

const Search = ({
  setCoords,
  setWeatherData,
  setLocation,
  searchValue,
  setSearchValue,
  setSearchError,
  lang,
  units,
  searchError,
  locale,
  voiceWeatherText,
}) => {
  const [glow, setGlow] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getWeather = async (searchValue) => {
    if (!searchValue) return;

    setIsLoading(!isLoading);
    // ### only to get coords & location name by city input
    const { response, data } = await getApiData(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&lang=${lang}&appid=${WEATHER_API_KEY}&units=${units}`
    );
    // ###

    try {
      const [lat, long] = [data.coord.lat, data.coord.lon];

      const weatherData = await getWeatherData(lat, long, lang, units);
      const { city, country, country_code } = await getLocationData(
        lat,
        long,
        lang
      );
      const flagUrl = await getCountryFlag(country_code);

      if (weatherData) setTimeout(() => setIsLoading(false), 1000);

      setWeatherData(weatherData);
      setLocation({
        city,
        country,
        flagUrl,
        country_code,
      });
      setCoords({ lat, long });
      setSearchError('');

      setBackground(weatherData.timezone, weatherData.lat);
    } catch (err) {
      setTimeout(() => setIsLoading(false), 1000);

      response.status === 404
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
        {isLoading ? (
          <img
            className="search__loading-icon"
            src="./assets/weather-icons/hurricane.svg"
            alt="hurricane"
          />
        ) : null}
        {searchError && !isLoading ? (
          <p className="search__error">{searchError}</p>
        ) : null}
      </div>
      <VoiceSearch
        getWeather={getWeather}
        setSearchValue={setSearchValue}
        lang={lang}
        locale={locale}
        voiceWeatherText={voiceWeatherText}
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
