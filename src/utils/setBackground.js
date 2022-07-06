import getImageData from '../api/getImageData';
import getRandomInteger from './getRandomInteger';

const setBackground = async (timezone, latitude) => {
  const image = new Image();
  const imageData = await getImageData(timezone, latitude);

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
