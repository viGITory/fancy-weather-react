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
import getLocationNameData from '../../api/getLocationNameData';

const Search = ({
  setCoords,
  setWeatherData,
  setUserLocation,
  searchValue,
  setSearchValue,
  lang,
  units
}) => {
  const [glow, setGlow] = useState({});

  const getWeather = async () => {
    if (!searchValue) return;
    // ### only to get coords & location name by city input
    const weatherDataByCityName = await getApiData(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&lang=${lang}&appid=${WEATHER_API_KEY}&units=${units}`
    );
    // ###

    const [lat, long] = [
      weatherDataByCityName.coord.lat,
      weatherDataByCityName.coord.lon,
    ];

    const weatherData = await getWeatherData(lat, long, lang, units);
    const [city, country] = await getLocationNameData(lat, long, lang);

    setWeatherData(weatherData);
    setUserLocation({
      city,
      country,
    });
    setCoords({ lat, long });

    setBackground();
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
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
