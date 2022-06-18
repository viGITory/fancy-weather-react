import './Header.css';

import setBackground from '../../utils/setBackground';

const Header = () => {
  return (
    <header className="header">
      <button
        className="header__bg-button"
        type="button"
        onClick={setBackground}
      >
        <span className="visually-hidden">Change background</span>
      </button>
    </header>
  );
};

export default Header;
