import { WEATHER_API_KEY } from './apiKeys';
import getApiData from './getApiData';

const getWeatherData = async (lat, long, lang, units) => {
  const weatherData = await getApiData(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&lang=${lang}&units=${units}&appid=${WEATHER_API_KEY}`
  );

  return weatherData;
};

export default getWeatherData;
