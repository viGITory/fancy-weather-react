import './Location.css';

const Location = ({ location }) => {
  return location.city ? (
    <p className="location">
      {location.city}, {location.country.slice(0, -2)}
      <span
        className="location__flag"
        style={{ backgroundImage: `url(${location.flagUrl})` }}
      >
        {location.country.slice(-2)}
      </span>
    </p>
  ) : (
    <p></p>
  );
};

export default Location;
