import './BackgroundButton.css';
import { useState } from 'react';

import HoverGlow from '../HoverGlow/HoverGlow';

import getImageData from '../../api/getImageData';
import setBackground from '../../utils/setBackground';
import addRippleEffect from '../../utils/addRippleEffect';
import getCursorPos from '../../utils/getCursorPos';
import translate from '../../data/translate';

const BackgroundButton = ({ appState, location }) => {
  const [glow, setGlow] = useState({});

  const { lang } = appState;
  const { coords, timezone } = location;

  const updateBackground = async () => {
    const imageData = await getImageData(timezone, coords.lat);
    setBackground(imageData);
  };

  return (
    <button
      className="background-button"
      type="button"
      onClick={async (e) => {
        updateBackground();
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
        {translate[lang].buttons.background}
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
