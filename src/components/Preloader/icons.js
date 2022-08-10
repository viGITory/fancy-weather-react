import { ReactComponent as WinterDayIcon } from '../../assets/preloader-icons/partly-cloudy-day-snow.svg';
import { ReactComponent as WinterNightIcon } from '../../assets/preloader-icons/partly-cloudy-night-snow.svg';

import { ReactComponent as SpringDayIcon } from '../../assets/preloader-icons/partly-cloudy-day-sleet.svg';
import { ReactComponent as SpringNightIcon } from '../../assets/preloader-icons/partly-cloudy-night-sleet.svg';

import { ReactComponent as SummerDayIcon } from '../../assets/preloader-icons/thunderstorms-day-rain.svg';
import { ReactComponent as SummerNightIcon } from '../../assets/preloader-icons/thunderstorms-night-rain.svg';

import { ReactComponent as AutumnDayIcon } from '../../assets/preloader-icons/partly-cloudy-day-rain.svg';
import { ReactComponent as AutumnNightIcon } from '../../assets/preloader-icons/partly-cloudy-night-rain.svg';

const icons = {
  winter: {
    day: <WinterDayIcon />,
    night: <WinterNightIcon />,
  },
  spring: {
    day: <SpringDayIcon />,
    night: <SpringNightIcon />,
  },
  summer: {
    day: <SummerDayIcon />,
    night: <SummerNightIcon />,
  },
  autumn: {
    day: <AutumnDayIcon />,
    night: <AutumnNightIcon />,
  },
};

export default icons;
