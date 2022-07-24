import './Preloader.css';

import translate from '../../data/translate';

const Preloader = ({ lang, loadingText }) => {
  const date = new Date();
  const hours = date.getHours();
  const month = date.getMonth();

  const iconNames = {
    winter: {
      day: 'partly-cloudy-day-snow',
      night: 'partly-cloudy-night-snow',
    },
    spring: {
      day: 'partly-cloudy-day-sleet',
      night: 'partly-cloudy-night-sleet',
    },
    summer: {
      day: 'thunderstorms-day-rain',
      night: 'thunderstorms-night-rain',
    },
    autumn: {
      day: 'partly-cloudy-day-rain',
      night: 'partly-cloudy-night-rain',
    },
  };
  const timeOfDay = ['night', 'morning', 'afternoon', 'evening'][
    Math.floor(hours / 6)
  ];
  const season = ['winter', 'spring', 'summer', 'autumn'][
    Math.floor(month / 3)
  ];

  return (
    <div className={hours >= 18 || hours < 6 ? 'dark preloader' : 'preloader'}>
      <img
        className="preloader__icon"
        src={`./assets/weather-icons/${
          hours >= 18 || hours < 6
            ? `${iconNames[season].night}`
            : `${iconNames[season].day}`
        }.svg`}
        alt="preloader"
      />
      <p className="preloader__greeting">
        {translate[lang].greeting[timeOfDay]}
      </p>
      {loadingText && <p className="preloader__api">{loadingText}</p>}
    </div>
  );
};

export default Preloader;
