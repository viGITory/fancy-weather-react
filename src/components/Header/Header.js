import './Header.css';
import { useState } from 'react';

import BackgroundButton from '../BackgroundButton/BackgroundButton';
import LanguageButton from '../LanguageButton/LanguageButton';
import TempButtons from '../TempButtons/TempButtons';
import Search from '../Search/Search';
import VoiceNotice from '../VoiceNotice/VoiceNotice';
import PositionButton from '../PositionButton/PositionButton';

const Header = ({
  className,
  appState,
  currentUserLocation,
  setCoords,
  setLocation,
  setWeatherData,
  setAppState,
  timeZone,
  latitude,
  voiceWeatherText,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchError, setSearchError] = useState('');

  return (
    <header className={`${className ? `${className} ` : ''}header`}>
      <BackgroundButton
        appState={appState}
        timeZone={timeZone}
        latitude={latitude}
      />
      <LanguageButton appState={appState} setAppState={setAppState} />
      <TempButtons appState={appState} setAppState={setAppState} />
      <VoiceNotice appState={appState} voiceWeatherText={voiceWeatherText} />
      <PositionButton
        appState={appState}
        currentUserLocation={currentUserLocation}
        setCoords={setCoords}
        setLocation={setLocation}
        setWeatherData={setWeatherData}
        setSearchValue={setSearchValue}
        setSearchError={setSearchError}
      />
      <Search
        appState={appState}
        setWeatherData={setWeatherData}
        setLocation={setLocation}
        setCoords={setCoords}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSearchError={setSearchError}
        searchError={searchError}
        voiceWeatherText={voiceWeatherText}
      />
    </header>
  );
};

export default Header;
