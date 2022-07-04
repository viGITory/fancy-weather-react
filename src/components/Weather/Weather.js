import './Weather.css';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import DailyForecast from '../DailyForecast/DailyForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';

const Weather = ({
  weatherData,
  locale,
  lang,
  location,
  setVoiceWeatherText,
}) => {
  return weatherData.current ? (
    <div className="weather">
      <CurrentWeather
        weatherData={weatherData}
        lang={lang}
        location={location}
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
