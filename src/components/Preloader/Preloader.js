import './Preloader.css';

import { useEffect, useState } from 'react';

import translate from '../../data/translate';

const Preloader = ({ lang }) => {
  const [visible, setVisible] = useState(true);

  const hours = new Date().getHours();
  const timeOfDay = ['night', 'morning', 'afternoon', 'evening'][
    Math.floor(hours / 6)
  ];

  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    });
  }, []);

  return visible ? (
    <div className={hours >= 18 || hours < 6 ? 'dark preloader' : 'preloader'}>
      <img
        className="preloader__icon"
        src={`./assets/weather-icons/${
          hours >= 18 || hours < 6 ? 'night-hail' : 'hail'
        }.svg`}
        alt="preloader"
      />
      <p className="preloader__text">{translate[lang].greeting[timeOfDay]}</p>
    </div>
  ) : (
    ''
  );
};

export default Preloader;
