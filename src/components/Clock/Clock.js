import { useEffect, useState } from 'react';

const Clock = ({ weatherData }) => {
  const date = new Date();
  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: weatherData.timeZone_offset,
  };
  const dayOptions = {
    day: 'numeric',
    weekday: 'short',
    month: 'long',
  };

  const [day, setDay] = useState([
    date.toLocaleDateString('en-EN', dayOptions),
  ]);
  const [time, setTime] = useState([date.toLocaleString('en-EN', timeOptions)]);

  useEffect(() => {
    const getTime = () => {
      const dateNow = new Date();

      const currentDay = dateNow.toLocaleString('en-EN', {
        day: 'numeric',
        weekday: 'short',
        month: 'long',
      });
      const currentTime = dateNow.toLocaleString('ru-RU', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: weatherData.timeZone_offset,
      });

      setDay(currentDay);
      setTime(currentTime);
    };

    setTimeout(() => getTime(), 1000);
  }, [day, time, weatherData]);

  return (
    <div className="clock">
      <p className="clock__day">{day}</p>
      <p className="clock__time">{time}</p>
    </div>
  );
};

export default Clock;
