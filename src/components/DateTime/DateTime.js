import './DateTime.css';

import { useEffect, useState } from 'react';

const DateTime = ({ appState, location }) => {
  const [day, setDay] = useState([]);
  const [time, setTime] = useState([]);

  const { locale } = appState;
  const { timezone } = location;

  useEffect(() => {
    const getTime = () => {
      const date = new Date();

      const currentDay = date.toLocaleString(locale, {
        day: 'numeric',
        weekday: 'long',
        month: 'long',
        timeZone: timezone,
      });
      const currentTime = date.toLocaleString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: timezone,
      });

      setDay(currentDay);
      setTime(currentTime);
    };

    setTimeout(() => getTime(), 1000);
  }, [day, time, timezone, locale]);

  return (
    <div className="date-time">
      <p>{day}</p>
      <p>{time}</p>
    </div>
  );
};

export default DateTime;
