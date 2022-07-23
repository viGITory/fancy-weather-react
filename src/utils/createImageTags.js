const createImageTags = (timezone, latitude) => {
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

  return tags;
};

export default createImageTags;
