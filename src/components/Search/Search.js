import './Search.css';
import { useState } from 'react';
import axios from 'axios';

import HoverGlow from '../HoverGlow/HoverGlow';
import HomeButton from '../HomeButton/HomeButton';
import VoiceSearch from '../VoiceSearch/VoiceSearch';

import addRippleEffect from '../../utils/addRippleEffect';
import getCursorPos from '../../utils/getCursorPos';

import { WEATHER_API_KEY } from '../../api/apiKeys';
import translate from '../../data/translate';

const Search = ({
  className,
  appState,
  userCoords,
  searchValue,
  searchError,
  voiceWeatherText,

  getApiData,
  setSearchValue,
  setSearchError,
}) => {
  const [glow, setGlow] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { loadingText, lang, units } = appState;

  const getCityData = (searchValue) => {
    if (!searchValue) return;
    setIsLoading(true);

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&lang=${lang}&appid=${WEATHER_API_KEY}&units=${units}`;

    axios
      .get(weatherUrl)
      .then((response) => {
        const { lat, lon: long } = response.data.coord;

        getApiData(lat, long);
        setSearchError('');

        setTimeout(() => setIsLoading(false), 1000);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => setIsLoading(false), 1000);

        err.response.status === 404
          ? setSearchError(translate[lang].search.errors[404])
          : setSearchError(translate[lang].search.errors.other);
      });
  };

  return (
    <div className={`${className ? `${className} ` : ''}search`}>
      {userCoords && (
        <HomeButton
          className="search__home-button"
          appState={appState}
          userCoords={userCoords}
          getApiData={getApiData}
          setSearchValue={setSearchValue}
          setSearchError={setSearchError}
        />
      )}
      <div className="search__wrapper">
        <input
          className="search__input"
          type="text"
          value={searchValue}
          onInput={(e) => setSearchValue(e.target.value)}
          onKeyUp={(e) => {
            if (e.code === 'Enter') getCityData(searchValue);
          }}
          placeholder={translate[lang].search.input}
          aria-label={translate[lang].search.input}
        />
        {isLoading && <p className="search__loading">{loadingText}</p>}
        {searchError && !isLoading && (
          <p className="search__error">{searchError}</p>
        )}
      </div>
      <VoiceSearch
        appState={appState}
        voiceWeatherText={voiceWeatherText}
        getCityData={getCityData}
        setSearchValue={setSearchValue}
      />
      <button
        className="search__button"
        type="button"
        onClick={(e) => {
          getCityData(searchValue);
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
