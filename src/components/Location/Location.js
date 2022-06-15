import './Location.css';

import countryNames from '../../data/countryNames';

const Location = ({ userLocation }) => {
  return userLocation.city ? (
    <p className="location">
      {userLocation.city}, {countryNames[userLocation.country]}
    </p>
  ) : (
    <p className="location">City, country</p>
  );
};

export default Location;
