import './Search.css';
import { useState } from 'react';

import HoverGlow from '../HoverGlow/HoverGlow';

import addRippleEffect from '../../utils/addRippleEffect';
import getCursorPos from '../../utils/getCursorPos';
import translate from '../../data/translate';

const Search = ({ setCityInputState, getWeather, lang }) => {
  const [glow, setGlow] = useState({});

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder={translate[lang].search.input}
        onBlur={setCityInputState}
        aria-label="Search city"
      />
      <button
        className="search__button"
        type="button"
        onClick={(e) => {
          addRippleEffect(e);
          getWeather();
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
