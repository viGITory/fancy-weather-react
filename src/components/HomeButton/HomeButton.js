import './HomeButton.css';
import { useState } from 'react';

import HoverGlow from '../HoverGlow/HoverGlow';

import getWeatherData from '../../api/getWeatherData';
import getLocationData from '../../api/getLocationData';
import getCountryFlag from '../../utils/getCountryFlag';
import getImageData from '../../api/getImageData';
import addRippleEffect from '../../utils/addRippleEffect';
import getCursorPos from '../../utils/getCursorPos';
import setBackground from '../../utils/setBackground';
import translate from '../../data/translate';

const HomeButton = ({
  appState,
  userCoords,

  setLocation,
  setWeatherData,
  setSearchValue,
  setSearchError,
}) => {
  const [glow, setGlow] = useState({});

  const { lang, units } = appState;
  const { lat, long } = userCoords;

  const setInitialPosData = async () => {
    const weatherData = await getWeatherData(lat, long, lang, units);
    const { city, country, country_code, timezone } = await getLocationData(
      lat,
      long,
      lang
    );
    const flagUrl = await getCountryFlag(country_code);
    const imageData = await getImageData(weatherData.timezone, lat);

    setLocation({
      coords: { lat, long },
      city,
      country,
      country_code,
      timezone,
      flagUrl,
    });
    setWeatherData(weatherData);
    setSearchValue('');
    setSearchError('');

    setBackground(imageData);
  };

  return (
    <button
      className="home-button"
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

export default HomeButton;
