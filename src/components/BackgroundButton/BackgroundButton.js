import './BackgroundButton.css';
import { useState } from 'react';
import axios from 'axios';

import HoverGlow from '../HoverGlow/HoverGlow';

import addRippleEffect from '../../utils/addRippleEffect';
import getCursorPos from '../../utils/getCursorPos';
import createImageTags from '../../utils/createImageTags';

import { IMAGES_API_KEY } from '../../api/apiKeys';
import translate from '../../data/translate';

const BackgroundButton = ({ appState, location, setImagesData }) => {
  const [glow, setGlow] = useState({});

  const { lang } = appState;
  const { coords, timezone } = location;

  const updateBackground = () => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${IMAGES_API_KEY}&tags=${createImageTags(
          timezone,
          coords.lat
        )}&tag_mode=all&sort=relevance&per_page=500&extras=url_h&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setImagesData(response.data);
      });
  };

  return (
    <button
      className="background-button"
      type="button"
      onClick={(e) => {
        updateBackground();
        addRippleEffect(e);
      }}
      onMouseMove={(e) => {
        const pos = getCursorPos(e);
        setGlow({ coordX: pos.x, coordY: pos.y, opacity: 1 });
      }}
      onMouseLeave={() => {
        setGlow({ opacity: 0 });
      }}
    >
      <span className="visually-hidden">
        {translate[lang].buttons.background}
      </span>
      <HoverGlow
        coordX={glow.coordX}
        coordY={glow.coordY}
        opacity={glow.opacity}
      />
    </button>
  );
};

export default BackgroundButton;
