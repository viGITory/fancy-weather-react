import './Weather.css';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import DailyForecast from '../DailyForecast/DailyForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';

const Weather = ({
  weatherData,
  locale,
  lang,
  userLocation,
  setVoiceWeatherText,
}) => {
  return weatherData.current ? (
    <div className="weather">
      <CurrentWeather
        weatherData={weatherData}
        lang={lang}
        userLocation={userLocation}
        setVoiceWeatherText={setVoiceWeatherText}
      />
      <HourlyForecast
        weatherData={weatherData}
        className={'weather__hourly-forecast'}
      />
      <DailyForecast weatherData={weatherData} locale={locale} lang={lang} />
    </div>
  ) : (
    <div></div>
  );
};

export default Weather;
