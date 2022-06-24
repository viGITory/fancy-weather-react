import './BackgroundButton.css';
import { useState } from 'react';

import HoverGlow from '../HoverGlow/HoverGlow';

import setBackground from '../../utils/setBackground';
import addRippleEffect from '../../utils/addRippleEffect';
import getCursorPos from '../../utils/getCursorPos';
import translate from '../../data/translate';

const BackgroundButton = ({ lang }) => {
  const [glow, setGlow] = useState({});

  return (
    <button
      className="background-button"
      type="button"
      onClick={(e) => {
        setBackground();
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
      <span className="visually-hidden">
        {translate[lang].background.button}
      </span>
      <HoverGlow
        coordX={glow.coordX}
        coordY={glow.coordY}
        opacity={glow.opacity}
      />
    </button>
  );
};

export default BackgroundButton;
