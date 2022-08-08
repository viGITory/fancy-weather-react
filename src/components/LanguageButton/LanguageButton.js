import './LanguageButton.css';
import { useEffect, useState } from 'react';

import HoverGlow from '../HoverGlow/HoverGlow';

import getCursorPos from '../../utils/getCursorPos';
import locales from '../../data/locales';

const LanguageButton = ({ appState, setAppState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [glow, setGlow] = useState({});

  const { lang } = appState;

  useEffect(() => setIsOpen(isOpen), [isOpen]);

  return (
    <div
      className="language-button"
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
      onMouseMove={(e) => {
        const pos = getCursorPos(e);
        setGlow({ coordX: pos.x, coordY: pos.y, opacity: 1 });
      }}
      onMouseLeave={() => {
        setGlow({ opacity: 0 });
      }}
    >
      <select
        className="language-button__select"
        value={lang}
        onChange={(e) => {
          setAppState((prevState) => ({
            ...prevState,
            locale: locales[e.target.value],
            lang: e.target.value,
          }));
        }}
      >
        <option value={'en'}>En</option>
        <option value={'ru'}>Ru</option>
        <option value={'es'}>Es</option>
        <option value={'fr'}>Fr</option>
        <option value={'de'}>De</option>
      </select>
      <span
        className={
          isOpen
            ? 'language-button__arrow language-button__arrow--open'
            : 'language-button__arrow'
        }
      ></span>
      <HoverGlow
        coordX={glow.coordX}
        coordY={glow.coordY}
        opacity={glow.opacity}
      />
    </div>
  );
};

export default LanguageButton;
