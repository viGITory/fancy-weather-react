import './Header.css';

import setBackground from '../../utils/setBackground';

const Header = ({ onBlur, onClick }) => {
  return (
    <header className="header">
      <button
        className="header__bg-button"
        type="button"
        onClick={setBackground}
      >
        <span className="visually-hidden">Change background</span>
      </button>
      <div className="header__search">
        <input
          className="header__input"
          type="text"
          placeholder="Search city"
          onBlur={onBlur}
          aria-label="Search city"
        />
        <button
          className="header__search-button"
          type="button"
          onClick={onClick}
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
