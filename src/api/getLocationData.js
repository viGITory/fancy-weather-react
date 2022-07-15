import { LOCATION_API_KEY } from './apiKeys';
import getApiData from './getApiData';

const getLocationData = async (lat, long, lang) => {
  const { data } = await getApiData(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&language=${lang}&key=${LOCATION_API_KEY}`
  );

  const city =
    data.results[0].components.city ||
    data.results[0].components.hamlet ||
    data.results[0].components.county ||
    data.results[0].components.state ||
    data.results[0].components.heritage ||
    data.results[0].components.suburb;

  return {
    city: city,
    country: data.results[0].components.country,
    country_code: data.results[0].components.country_code,
    timezone: data.results[0].annotations.timezone.name,
  };
};

export default getLocationData;
