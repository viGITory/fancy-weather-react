import './Weather.css';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import DailyForecast from '../DailyForecast/DailyForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';

const Weather = ({ appState, location, weatherData, setVoiceWeatherText }) => {
  return weatherData ? (
    <div className="weather">
      <CurrentWeather
        appState={appState}
        location={location}
        weatherData={weatherData}
        setVoiceWeatherText={setVoiceWeatherText}
      />
      <HourlyForecast
        className={'weather__hourly-forecast'}
        weatherData={weatherData}
      />
      <DailyForecast appState={appState} weatherData={weatherData} />
    </div>
  ) : (
    <div></div>
  );
};

export default Weather;
