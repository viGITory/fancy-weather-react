import './Weather.css';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import DailyForecast from '../DailyForecast/DailyForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';

const Weather = ({ appState, weatherData, location, setVoiceWeatherText }) => {
  return weatherData.current ? (
    <div className="weather">
      <CurrentWeather
        appState={appState}
        weatherData={weatherData}
        location={location}
        setVoiceWeatherText={setVoiceWeatherText}
      />
      <HourlyForecast
        weatherData={weatherData}
        className={'weather__hourly-forecast'}
      />
      <DailyForecast appState={appState} weatherData={weatherData} />
    </div>
  ) : (
    <div></div>
  );
};

export default Weather;
