import './Header.css';

import { useState } from 'react';

import setBackground from '../../utils/setBackground';
import addRippleEffect from '../../utils/addRippleEffect';
import HoverGlow from '../HoverGlow/HoverGlow';
import getCursorPos from '../../utils/getCursorPos';
import translate from '../../data/translate';

const Header = ({ onBlur, onClick, onChange, lang, changeUnits, units }) => {
  const [bgBtnGlow, setBgBtnGlow] = useState({});
  const [langBtnGlow, setLangBtnGlow] = useState({});
  const [unitsBtnGlow, setUnitsBtnGlow] = useState({});
  const [searchBtnGlow, setSearchBtnGlow] = useState({});

  const [celsius, setCelsius] = useState(units === 'metric' ? 'active' : '');
  const [fahrenheit, setFahrenheit] = useState(
    units === 'imperial' ? 'active' : ''
  );

  return (
    <header className="header">
      <button
        className="header__bg-button"
        type="button"
        onClick={(e) => {
          setBackground();
          addRippleEffect(e);
        }}
        onMouseMove={(e) => {
          const pos = getCursorPos(e);
          setBgBtnGlow({ coordX: pos.x, coordY: pos.y, opacity: 1 });
        }}
        onMouseLeave={() => {
          setBgBtnGlow({ opacity: 0 });
        }}
      >
        <span className="visually-hidden">
          {translate[lang].background.button}
        </span>
        <HoverGlow
          coordX={bgBtnGlow.coordX}
          coordY={bgBtnGlow.coordY}
          opacity={bgBtnGlow.opacity}
        />
      </button>
      <div
        className="header__lang"
        onMouseMove={(e) => {
          const pos = getCursorPos(e, 'offsetParent');
          setLangBtnGlow({ coordX: pos.x, coordY: pos.y, opacity: 1 });
        }}
        onMouseLeave={() => {
          setLangBtnGlow({ opacity: 0 });
        }}
      >
        <select
          className="header__select"
          value={lang}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        >
          <option value={'en'}>En</option>
          <option value={'ru'}>Ru</option>
          <option value={'es'}>Es</option>
          <option value={'fr'}>Fr</option>
          <option value={'de'}>De</option>
        </select>
        <HoverGlow
          coordX={langBtnGlow.coordX}
          coordY={langBtnGlow.coordY}
          opacity={langBtnGlow.opacity}
        />
      </div>
      <div
        className="header__units"
        onMouseMove={(e) => {
          const pos = getCursorPos(e, 'offsetParent');
          setUnitsBtnGlow({
            coordX: pos.x,
            coordY: pos.y,
            opacity: 1,
          });
        }}
        onMouseLeave={() => {
          setUnitsBtnGlow({ opacity: 0 });
        }}
      >
        <button
          className={
            celsius ? `header__unit-button ${celsius}` : 'header__unit-button'
          }
          type="button"
          onClick={(e) => {
            addRippleEffect(e);
            changeUnits('metric');
            setCelsius('active');
            setFahrenheit('');
          }}
        >
          °C
        </button>
        <button
          className={
            fahrenheit
              ? `header__unit-button ${fahrenheit}`
              : 'header__unit-button'
          }
          type="button"
          onClick={(e) => {
            addRippleEffect(e);
            changeUnits('imperial');
            setCelsius('');
            setFahrenheit('active');
          }}
        >
          °F
        </button>
        <HoverGlow
          coordX={unitsBtnGlow.coordX}
          coordY={unitsBtnGlow.coordY}
          opacity={unitsBtnGlow.opacity}
        />
      </div>
      <div className="header__search">
        <input
          className="header__input"
          type="text"
          placeholder={translate[lang].search.input}
          onBlur={onBlur}
          aria-label="Search city"
        />
        <button
          className="header__search-button"
          type="button"
          onClick={(e) => {
            addRippleEffect(e);
            onClick();
          }}
          onMouseMove={(e) => {
            const pos = getCursorPos(e);
            setSearchBtnGlow({ coordX: pos.x, coordY: pos.y, opacity: 1 });
          }}
          onMouseLeave={() => {
            setSearchBtnGlow({ opacity: 0 });
          }}
        >
          {translate[lang].search.button}
          <HoverGlow
            coordX={searchBtnGlow.coordX}
            coordY={searchBtnGlow.coordY}
            opacity={searchBtnGlow.opacity}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
