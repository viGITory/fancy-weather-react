import './Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <img
        className="preloader__icon"
        src="./assets/weather-icons/hail.svg"
        alt="preloader"
      />
      <p className="preloader__text">Loading</p>
    </div>
  );
};

export default Preloader;
