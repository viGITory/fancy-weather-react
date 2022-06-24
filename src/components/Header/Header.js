import './Header.css';

import BackgroundButton from '../BackgroundButton/BackgroundButton';
import LanguageButton from '../LanguageButton/LanguageButton';
import TempButtons from '../TempButtons/TempButtons';
import Search from '../Search/Search';

const Header = ({
  setCityInputState,
  getWeather,
  changeLang,
  lang,
  changeUnits,
  units,
}) => {
  return (
    <header className="header">
      <BackgroundButton lang={lang} />
      <LanguageButton changeLang={changeLang} lang={lang} />
      <TempButtons changeUnits={changeUnits} units={units} />
      <Search
        setCityInputState={setCityInputState}
        getWeather={getWeather}
        lang={lang}
      />
    </header>
  );
};

export default Header;
