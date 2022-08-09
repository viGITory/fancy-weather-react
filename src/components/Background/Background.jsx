import './Background.css';
import { useRef, useEffect } from 'react';

import getRandomInteger from '../../utils/getRandomInteger';

const Background = ({ imagesData }) => {
  const container = useRef(null);

  useEffect(() => {
    const setBackground = () => {
      if (imagesData) {
        const image = new Image();

        const filteredImages = imagesData.photos.photo.filter(
          (photo) =>
            photo.url_h && photo.width_h === 1600 && photo.height_h === 1067
        );

        image.src =
          filteredImages[getRandomInteger(0, filteredImages.length - 1)].url_h;

        image.addEventListener(
          'load',
          () => (container.current.style.backgroundImage = `url(${image.src})`)
        );
      }
    };

    setBackground();
  }, [imagesData]);

  return <div className="background" ref={container}></div>;
};

export default Background;
