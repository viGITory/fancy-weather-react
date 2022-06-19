import { WEATHER_API_KEY } from './apiKeys';
import getApiData from './getApiData';

const getLocationNameData = async (lat, long) => {
  const data = await getApiData(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}`
  );

  return [data.name, data.sys.country];
};

export default getLocationNameData;
