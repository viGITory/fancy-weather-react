import './LanguageButton.css';
import { useState } from 'react';

import HoverGlow from '../HoverGlow/HoverGlow';

import getCursorPos from '../../utils/getCursorPos';

const LanguageButton = ({ changeLang, lang }) => {
  const [glow, setGlow] = useState({});

  return (
    <div
      className="language-button"
      onMouseMove={(e) => {
        const pos = getCursorPos(e, 'offsetParent');
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
          changeLang(e.target.value);
        }}
      >
        <option value={'en'}>En</option>
        <option value={'ru'}>Ru</option>
        <option value={'es'}>Es</option>
        <option value={'fr'}>Fr</option>
        <option value={'de'}>De</option>
      </select>
      <HoverGlow
        coordX={glow.coordX}
        coordY={glow.coordY}
        opacity={glow.opacity}
      />
    </div>
  );
};

export default LanguageButton;
