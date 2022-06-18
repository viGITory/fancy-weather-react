import { IMAGES_API_KEY } from '../api/apiKeys';
import getApiData from '../api/getApiData';

const getImageData = async () => {
  const imageData = await getApiData(
    `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${IMAGES_API_KEY}&gallery_id=72157715186109466&extras=url_h&format=json&nojsoncallback=1`
  );

  return imageData;
};

export default getImageData;
