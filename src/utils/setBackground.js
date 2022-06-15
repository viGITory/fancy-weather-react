import { IMAGES_API_KEY } from '../api/apiKeys';
import getApiData from '../api/getApiData';
import getRandomInteger from './getRandomInteger';

const setBackground = async () => {
  const image = new Image();
  const imageData = await getApiData(
    `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${IMAGES_API_KEY}&gallery_id=72157715186109466&extras=url_h&format=json&nojsoncallback=1`
  );
  const filteredImages = imageData.photos.photo.filter(
    (photo) => photo.url_h && photo.width_h === 1600 && photo.height_h === 1067
  );
  image.src = filteredImages[getRandomInteger(0, filteredImages.length)].url_h;

  image.addEventListener(
    'load',
    () => (document.body.style.backgroundImage = `url(${image.src})`)
  );
};

export default setBackground;
