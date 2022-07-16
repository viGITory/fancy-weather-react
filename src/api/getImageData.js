import axios from 'axios';

import { IMAGES_API_KEY } from '../api/apiKeys';

const getImageData = async (timezone, latitude) => {
  const date = new Date();
  const hours = date.toLocaleString('ru-RU', {
    hour: 'numeric',
    timeZone: timezone,
  });
  const month = date.toLocaleString('en-EN', {
    month: 'numeric',
    timeZone: timezone,
  });

  // different seasons for northern/southern hemisphere
  const season =
    latitude < 0
      ? ['summer', 'autumn', 'winter', 'spring'][Math.floor(month / 3)]
      : ['winter', 'spring', 'summer', 'autumn'][Math.floor(month / 3)];

  const timeOfDay = ['night', 'morning', 'afternoon', 'evening'][
    Math.floor(hours / 6)
  ];
  const tags = [season, timeOfDay, 'landscape', 'nature'];

  const { data } = await axios.get(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${IMAGES_API_KEY}&tags=${[
      ...tags,
    ]}&tag_mode=all&sort=relevance&per_page=500&extras=url_h&format=json&nojsoncallback=1`
  );

  return data;
};

export default getImageData;
