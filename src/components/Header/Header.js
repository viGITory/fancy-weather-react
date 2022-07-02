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
  setUserLocation,
  setWeatherData,
  changeLang,
  lang,
  changeUnits,
  units,
  locale,
  voiceWeatherText,
}) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className={`${className ? `${className} ` : ''}header`}>
      <BackgroundButton lang={lang} />
      <LanguageButton changeLang={changeLang} lang={lang} />
      <TempButtons changeUnits={changeUnits} units={units} />
      <VoiceNotice
        lang={lang}
        locale={locale}
        voiceWeatherText={voiceWeatherText}
      />
      <PositionButton
        currentUserLocation={currentUserLocation}
        setCoords={setCoords}
        setUserLocation={setUserLocation}
        setWeatherData={setWeatherData}
        setSearchValue={setSearchValue}
        lang={lang}
        units={units}
      />
      <Search
        setWeatherData={setWeatherData}
        setUserLocation={setUserLocation}
        setCoords={setCoords}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        lang={lang}
        units={units}
      />
    </header>
  );
};

export default Header;
