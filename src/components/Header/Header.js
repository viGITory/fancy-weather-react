import './Header.css';

import { useState } from 'react';

import setBackground from '../../utils/setBackground';
import addRippleEffect from '../../utils/addRippleEffect';
import getCursorPos from '../../utils/getCursorPos';

const Header = ({ onBlur, onClick }) => {
  const [bgBtnOpacity, setBgBtnOpacity] = useState();
  const [bgBtnCoords, setBgBtnCoords] = useState(0, 0);
  const [searchBtnOpacity, setSearchBtnOpacity] = useState();
  const [searchBtnCoords, setSearchBtnCoords] = useState(0, 0);

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
        onMouseLeave={(e) => {
          setBgBtnOpacity(0);
        }}
      >
        <span className="visually-hidden">Change background</span>
        <span
          className="hover-glow"
          style={{
            transform: `translate(${bgBtnCoords.x}px, ${bgBtnCoords.y}px)`,
            opacity: bgBtnOpacity,
          }}
        ></span>
      </button>
      <div className="header__search">
        <input
          className="header__input"
          type="text"
          placeholder="Search city"
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
          onMouseLeave={(e) => {
            setSearchBtnOpacity(0);
          }}
        >
          Search
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
