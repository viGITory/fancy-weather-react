import './Header.css';

import { useState } from 'react';

import setBackground from '../../utils/setBackground';
import addRippleEffect from '../../utils/addRippleEffect';
import getCursorPos from '../../utils/getCursorPos';
import translate from '../../data/translate';

const Header = ({ onBlur, onClick, onChange, lang }) => {
  const [bgBtnOpacity, setBgBtnOpacity] = useState();
  const [bgBtnCoords, setBgBtnCoords] = useState(0, 0);
  const [searchBtnOpacity, setSearchBtnOpacity] = useState();
  const [searchBtnCoords, setSearchBtnCoords] = useState(0, 0);
  const [langBtnOpacity, setLangBtnOpacity] = useState();
  const [langBtnCoords, setLangBtnCoords] = useState(0, 0);

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
          setBgBtnOpacity(1);
          setBgBtnCoords(getCursorPos(e));
        }}
        onMouseLeave={() => {
          setBgBtnOpacity(0);
        }}
      >
        <span className="visually-hidden">
          {translate[lang].background.button}
        </span>
        <span
          className="hover-glow"
          style={{
            transform: `translate(${bgBtnCoords.x}px, ${bgBtnCoords.y}px)`,
            opacity: bgBtnOpacity,
          }}
        ></span>
      </button>
      <div
        className="header__lang"
        onMouseMove={(e) => {
          setLangBtnOpacity(1);
          setLangBtnCoords(getCursorPos(e, 'offsetParent'));
        }}
        onMouseLeave={() => {
          setLangBtnOpacity(0);
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
        <span
          className="hover-glow"
          style={{
            transform: `translate(${langBtnCoords.x}px, ${langBtnCoords.y}px)`,
            opacity: langBtnOpacity,
          }}
        ></span>
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
            setSearchBtnOpacity(1);
            setSearchBtnCoords(getCursorPos(e));
          }}
          onMouseLeave={() => {
            setSearchBtnOpacity(0);
          }}
        >
          {translate[lang].search.button}
          <span
            className="hover-glow"
            style={{
              transform: `translate(${searchBtnCoords.x}px, ${searchBtnCoords.y}px)`,
              opacity: searchBtnOpacity,
            }}
          ></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
