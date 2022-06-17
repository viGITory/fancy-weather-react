import './DateTime.css';

import { useEffect, useState } from 'react';

const DateTime = () => {
  const [day, setDay] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    const getTime = () => {
      const date = new Date();

      const currentDay = date.toLocaleString('en-US', {
        day: 'numeric',
        weekday: 'long',
        month: 'long',
      });
      const currentTime = date.toLocaleTimeString();

      setDay(currentDay);
      setTime(currentTime);
    };

    setTimeout(() => getTime(), 1000);
  }, [day, time]);

  return (
    <div className="date-time">
      <p>{day}</p>
      <p>{time}</p>
    </div>
  );
};

export default DateTime;
