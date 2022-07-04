import './Location.css';

const Location = ({ location }) => {
  return location.city ? (
    <p className="location">
      {location.city}, {location.country}
    </p>
  ) : (
    <p></p>
  );
};

export default Location;
