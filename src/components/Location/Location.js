import { useEffect, useState } from 'react';
import './Location.css';

const Location = ({ location }) => {
  const [flag, setFlag] = useState();
  const { city, country, flagUrl } = location;

  useEffect(() => {
    const image = new Image();
    image.src = flagUrl;

    image.addEventListener('load', () => setFlag(image.src));
  }, [flagUrl]);

  return (
    <p className="location">
      {city}, {country.slice(0, -2)}
      <span
        className="location__flag"
        style={{ backgroundImage: `url(${flag})` }}
      >
        {country.slice(-2)}
      </span>
    </p>
  );
};

export default Location;
