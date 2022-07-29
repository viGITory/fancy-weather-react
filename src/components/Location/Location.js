import './Location.css';
import { useEffect, useState } from 'react';

import translate from '../../data/translate';

const Location = ({ location }) => {
  const [flag, setFlag] = useState();
  const { city, country, flagUrl } = location;

  const isEasterEgg = city === translate['ru'].easter_eggs[48][17].city_name;
  const easterEggCountry = translate['ru'].easter_eggs[48].country_name;

  useEffect(() => {
    const image = new Image();
    image.src = flagUrl;

    image.addEventListener('load', () => setFlag(image.src));
  }, [flagUrl]);

  return (
    <p className="location">
      {city},{' '}
      {isEasterEgg ? easterEggCountry.slice(0, -2) : country.slice(0, -2)}
      <span
        className="location__flag"
        style={{ backgroundImage: `url(${flag})` }}
      >
        {isEasterEgg ? easterEggCountry.slice(-2) : country.slice(-2)}
      </span>
    </p>
  );
};

export default Location;
