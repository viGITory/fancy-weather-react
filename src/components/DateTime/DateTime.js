import './DateTime.css';

import { useEffect, useState } from 'react';

const DateTime = ({ className, timeZone, locale }) => {
  const [day, setDay] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    const getTime = () => {
      const date = new Date();

      const currentDay = date.toLocaleString(locale, {
        day: 'numeric',
        weekday: 'long',
        month: 'long',
        timeZone: timeZone,
      });
      const currentTime = date.toLocaleString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: timeZone,
      });

      setDay(currentDay);
      setTime(currentTime);
    };

    setTimeout(() => getTime(), 1000);
  }, [day, time, timeZone, locale]);

  return (
    <div className={`${className ? `${className} ` : ''}date-time`}>
      <p>{day}</p>
      <p>{time}</p>
    </div>
  );
};

export default DateTime;
