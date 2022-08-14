import './HomeButton.css';
import { useState } from 'react';

import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import HoverGlow from '../HoverGlow/HoverGlow';

import addRippleEffect from '../../utils/addRippleEffect';
import getCursorPos from '../../utils/getCursorPos';

import translate from '../../data/translate';

const HomeButton = ({
  className,
  appState,
  userCoords,

  getApiData,
  setSearchValue,
  setSearchError,
}) => {
  const [glow, setGlow] = useState({});
  const { lang } = appState;

  const setUserPosData = () => {
    const { lat, long } = userCoords;
    getApiData(lat, long);

    setSearchValue('');
    setSearchError('');
  };

  return (
    <button
      className={`${className ? `${className} ` : ''}home-button`}
      aria-label={`${translate[lang].buttons.position}`}
      onClick={(e) => {
        setUserPosData();
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
      <HomeIcon />
      <HoverGlow
        coordX={glow.coordX}
        coordY={glow.coordY}
        opacity={glow.opacity}
      />
    </button>
  );
};

export default HomeButton;
