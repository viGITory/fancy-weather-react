import './Header.css';

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
  setCityInputState,
  getWeather,
  setWeatherData,
  changeLang,
  lang,
  changeUnits,
  units,
  locale,
  voiceWeatherText,
}) => {
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
        lang={lang}
        units={units}
      />
      <Search
        setCityInputState={setCityInputState}
        getWeather={getWeather}
        lang={lang}
      />
    </header>
  );
};

export default Header;
