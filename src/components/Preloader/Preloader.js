import './Preloader.css';

import { useEffect, useState } from 'react';

import getTimeOfDay from '../../utils/getTimeOfDay';
import translate from '../../data/translate';

const Preloader = ({ lang }) => {
  const [visible, setVisible] = useState(true);

  const checkDarkTime = () => {
    const hours = new Date().getHours();
    return hours >= 18 || hours < 6;
  };

  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    });
  }, []);

  return visible ? (
    <div className={checkDarkTime() ? 'dark preloader' : 'preloader'}>
      <img
        className="preloader__icon"
        src={`./assets/weather-icons/${
          checkDarkTime() ? 'night-hail' : 'hail'
        }.svg`}
        alt="preloader"
      />
      <p className="preloader__text">
        {translate[lang].greeting[getTimeOfDay()]}
      </p>
    </div>
  ) : (
    ''
  );
};

export default Preloader;
