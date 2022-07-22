import './Header.css';
import { useState } from 'react';

import BackgroundButton from '../BackgroundButton/BackgroundButton';
import LanguageButton from '../LanguageButton/LanguageButton';
import TempButtons from '../TempButtons/TempButtons';
import Search from '../Search/Search';
import VoiceNotice from '../VoiceNotice/VoiceNotice';

const Header = ({
  className,
  appState,
  userCoords,
  weatherData,
  location,
  voiceWeatherText,

  setAppState,
  setLocation,
  setWeatherData,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchError, setSearchError] = useState('');

  return (
    <header className={`${className ? `${className} ` : ''}header`}>
      {weatherData && (
        <div className="header__left">
          <BackgroundButton appState={appState} location={location} />
          <LanguageButton appState={appState} setAppState={setAppState} />
          <TempButtons appState={appState} setAppState={setAppState} />
          <VoiceNotice
            appState={appState}
            voiceWeatherText={voiceWeatherText}
          />
        </div>
      )}
      <Search
        className="header__search"
        appState={appState}
        userCoords={userCoords}
        searchValue={searchValue}
        searchError={searchError}
        voiceWeatherText={voiceWeatherText}
        setLocation={setLocation}
        setWeatherData={setWeatherData}
        setSearchValue={setSearchValue}
        setSearchError={setSearchError}
      />
    </header>
  );
};

export default Header;
