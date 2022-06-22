import './Location.css';

const Location = ({ userLocation }) => {
  return userLocation.city ? (
    <p className="location">
      {userLocation.city}, {userLocation.country}
    </p>
  ) : (
    <p></p>
  );
};

export default Location;
