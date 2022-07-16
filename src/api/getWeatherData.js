import axios from 'axios';

import { WEATHER_API_KEY } from './apiKeys';

const getWeatherData = async (lat, long, lang, units) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&lang=${lang}&units=${units}&appid=${WEATHER_API_KEY}`
  );

  return data;
};

export default getWeatherData;
