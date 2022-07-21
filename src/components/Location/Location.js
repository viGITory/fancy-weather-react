import './Location.css';

const Location = ({ location }) => {
  const { city, country, flagUrl } = location;

  return (
    <p className="location">
      {city}, {country.slice(0, -2)}
      <span
        className="location__flag"
        style={{ backgroundImage: `url(${flagUrl})` }}
      >
        {country.slice(-2)}
      </span>
    </p>
  );
};

export default Location;
