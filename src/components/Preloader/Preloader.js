import './Preloader.css';

import icons from './icons';
import translate from '../../data/translate';

const Preloader = ({ lang, loadingText }) => {
  const date = new Date();
  const hours = date.getHours();
  const month = date.getMonth();

  const isDark = hours >= 18 || hours < 6;
  const timeOfDay = ['night', 'morning', 'afternoon', 'evening'][
    Math.floor(hours / 6)
  ];
  const season = ['winter', 'spring', 'summer', 'autumn'][
    month === 11 ? 0 : Math.floor((month + 1) / 3)
  ];

  return (
    <div className={isDark ? 'dark preloader' : 'preloader'}>
      {isDark ? icons[season].night : icons[season].day}
      <p className="preloader__greeting">
        {translate[lang].greeting[timeOfDay]}
      </p>
      {loadingText && <p className="preloader__api">{loadingText}</p>}
    </div>
  );
};

export default Preloader;
