import './DateTime.css';

import { useEffect, useState } from 'react';

const DateTime = ({ weatherData }) => {
  const date = new Date();
  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: weatherData.timeZone_offset,
  };
  const dayOptions = {
    day: 'numeric',
    weekday: 'long',
    month: 'long',
  };

  const [day, setDay] = useState([date.toLocaleString('en-EN', dayOptions)]);
  const [time, setTime] = useState([date.toLocaleTimeString()]);

  useEffect(() => {
    const getTime = () => {
      const dateNow = new Date();

      const currentDay = dateNow.toLocaleString('en-EN', dayOptions);
      const currentTime = dateNow.toLocaleTimeString();

      setDay(currentDay);
      setTime(currentTime);
    };

    setTimeout(() => getTime(), 1000);
  }, [day, time, weatherData]);

  return (
    <div className="date-time">
      <p>{day}</p>
      <p>{time}</p>
    </div>
  );
};

export default DateTime;
