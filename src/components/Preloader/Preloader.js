import './Preloader.css';

import { useEffect, useState } from 'react';

const Preloader = () => {
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
      <p className="preloader__text">Loading</p>
    </div>
  ) : (
    ''
  );
};

export default Preloader;
