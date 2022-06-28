import './LanguageButton.css';
import { useEffect, useState } from 'react';

import HoverGlow from '../HoverGlow/HoverGlow';

import getCursorPos from '../../utils/getCursorPos';

const LanguageButton = ({ changeLang, lang }) => {
  const [rotateDeg, setRotateDeg] = useState(0);
  const [glow, setGlow] = useState({});

  useEffect(() => setRotateDeg(rotateDeg), [rotateDeg]);

  return (
    <div
      className="language-button"
      onClick={() => (rotateDeg ? setRotateDeg(0) : setRotateDeg(180))}
      onBlur={() => setRotateDeg(0)}
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
      <span
        className="language-button__arrow"
        style={{ transform: `translateY(-50%) rotate(${rotateDeg}deg)` }}
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
