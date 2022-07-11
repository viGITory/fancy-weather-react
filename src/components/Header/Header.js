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
  currentUserLocation,
  setCoords,
  setLocation,
  setWeatherData,
  setLocale,
  setLang,
  setUnits,
  lang,
  units,
  locale,
  timeZone,
  latitude,
  voiceWeatherText,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchError, setSearchError] = useState('');

  return (
    <header className={`${className ? `${className} ` : ''}header`}>
      <BackgroundButton lang={lang} timeZone={timeZone} latitude={latitude} />
      <LanguageButton setLocale={setLocale} setLang={setLang} lang={lang} />
      <TempButtons setUnits={setUnits} units={units} />
      <VoiceNotice
        lang={lang}
        locale={locale}
        voiceWeatherText={voiceWeatherText}
      />
      <PositionButton
        currentUserLocation={currentUserLocation}
        setCoords={setCoords}
        setLocation={setLocation}
        setWeatherData={setWeatherData}
        setSearchValue={setSearchValue}
        setSearchError={setSearchError}
        lang={lang}
        units={units}
      />
      <Search
        setWeatherData={setWeatherData}
        setLocation={setLocation}
        setCoords={setCoords}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSearchError={setSearchError}
        lang={lang}
        units={units}
        searchError={searchError}
      />
    </header>
  );
};

export default Header;
