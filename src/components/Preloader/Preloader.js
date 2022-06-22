import './Preloader.css';

import { useEffect, useState } from 'react';
import translateMap from '../../data/translate';

const Preloader = ({ lang }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    });
  }, []);

  return visible ? (
    <div className="preloader">
      <img
        className="preloader__icon"
        src="./assets/weather-icons/hail.svg"
        alt="preloader"
      />
      <p className="preloader__text">{translateMap[lang].loading}</p>
    </div>
  ) : (
    ''
  );
};

export default Preloader;
