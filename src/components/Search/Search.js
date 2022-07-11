import './Search.css';
import { useState } from 'react';

import HoverGlow from '../HoverGlow/HoverGlow';

import { WEATHER_API_KEY } from '../../api/apiKeys';
import translate from '../../data/translate';

import addRippleEffect from '../../utils/addRippleEffect';
import getCursorPos from '../../utils/getCursorPos';
import getApiData from '../../api/getApiData';
import setBackground from '../../utils/setBackground';
import getWeatherData from '../../api/getWeatherData';
import getLocationName from '../../utils/getLocationName';

const Search = ({
  setCoords,
  setWeatherData,
  setLocation,
  searchValue,
  setSearchValue,
  lang,
  units
}) => {
  const [glow, setGlow] = useState({});

  const getWeather = async () => {
    if (!searchValue) return;
    // ### only to get coords & location name by city input
    const { data } = await getApiData(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&lang=${lang}&appid=${WEATHER_API_KEY}&units=${units}`
    );
    // ###

    const [lat, long] = [data.coord.lat, data.coord.lon];

    const weatherData = await getWeatherData(lat, long, lang, units);
    const [city, country] = await getLocationName(lat, long, lang);

    setWeatherData(weatherData);
    setLocation({
      city,
      country,
    });
    setCoords({ lat, long });

    setBackground(weatherData.timezone, weatherData.lat);
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        value={searchValue}
        onInput={(e) => setSearchValue(e.target.value)}
        onKeyUp={(e) => {
          if (e.code === 'Enter') getWeather();
        }}
        placeholder={translate[lang].search.input}
        aria-label="Search city"
      />
      <button
        className="search__button"
        type="button"
        onClick={(e) => {
          getWeather();
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
