import './PositionButton.css';
import { useState } from 'react';

import HoverGlow from '../HoverGlow/HoverGlow';

import getWeatherData from '../../api/getWeatherData';
import addRippleEffect from '../../utils/addRippleEffect';
import getCursorPos from '../../utils/getCursorPos';
import translate from '../../data/translate';

const PositionButton = ({
  currentUserLocation,
  setCoords,
  setUserLocation,
  setWeatherData,
  setSearchValue,
  lang,
  units,
}) => {
  const [glow, setGlow] = useState({});

  const setInitialPosData = async () => {
    const weatherData = await getWeatherData(
      currentUserLocation.coords.lat,
      currentUserLocation.coords.long,
      lang,
      units
    );

    setWeatherData(weatherData);
    setCoords({
      lat: currentUserLocation.coords.lat,
      long: currentUserLocation.coords.long,
    });
    setUserLocation({
      city: currentUserLocation.place.city,
      country: currentUserLocation.place.country,
    });
    setSearchValue('');
  };

  return (
    <button
      className="position-button"
      onClick={(e) => {
        setInitialPosData();
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
        {translate[lang].buttons.position}
      </span>
      <HoverGlow
        coordX={glow.coordX}
        coordY={glow.coordY}
        opacity={glow.opacity}
      />
    </button>
  );
};

export default PositionButton;
