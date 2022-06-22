import { LOCATION_API_KEY } from './apiKeys';
import getApiData from './getApiData';

const getLocationNameData = async (lat, long, lang) => {
  const data = await getApiData(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&language=${lang}&key=${LOCATION_API_KEY}`
  );

  const city =
    data.results[0].components.city || data.results[0].components.hamlet;

  return [city, data.results[0].components.country];
};

export default getLocationNameData;
