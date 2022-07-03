import './TempButtons.css';
import { useState } from 'react';

import HoverGlow from '../HoverGlow/HoverGlow';

import addRippleEffect from '../../utils/addRippleEffect';
import getCursorPos from '../../utils/getCursorPos';

const TempUnits = ({ setUnits, units }) => {
  const [glow, setGlow] = useState({});

  return (
    <div
      className="temp-buttons"
      onMouseMove={(e) => {
        const pos = getCursorPos(e, 'offsetParent');
        setGlow({
          coordX: pos.x,
          coordY: pos.y,
          opacity: 1,
        });
      }}
      onMouseLeave={() => {
        setGlow({ opacity: 0 });
      }}
    >
      <button
        className={
          units === 'metric'
            ? `temp-buttons__button active`
            : 'temp-buttons__button'
        }
        type="button"
        onClick={(e) => {
          addRippleEffect(e);
          setUnits('metric');
        }}
      >
        °C
      </button>
      <button
        className={
          !(units === 'metric')
            ? `temp-buttons__button active`
            : 'temp-buttons__button'
        }
        type="button"
        onClick={(e) => {
          addRippleEffect(e);
          setUnits('imperial');
        }}
      >
        °F
      </button>
      <HoverGlow
        coordX={glow.coordX}
        coordY={glow.coordY}
        opacity={glow.opacity}
      />
    </div>
  );
};

export default TempUnits;
