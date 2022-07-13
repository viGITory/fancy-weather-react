import { LOCATION_API_KEY } from '../api/apiKeys';
import getApiData from '../api/getApiData';

const getLocationName = async (lat, long, lang) => {
  const { data } = await getApiData(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&language=${lang}&key=${LOCATION_API_KEY}`
  );

  const city =
    data.results[0].components.city ||
    data.results[0].components.hamlet ||
    data.results[0].components.county ||
    data.results[0].components.state;

  return [
    city,
    data.results[0].components.country,
    data.results[0].components.country_code,
    data.results[0].components['ISO_3166-1_alpha-3'],
  ];
};

export default getLocationName;
