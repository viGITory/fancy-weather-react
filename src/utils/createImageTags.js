const createImageTags = (timezone, latitude) => {
  const date = new Date();
  const hours = date.toLocaleString('ru-RU', {
    hour: 'numeric',
    timeZone: timezone,
  });
  const month = +date.toLocaleString('en-EN', {
    month: 'numeric',
    timeZone: timezone,
  });

  // different seasons for northern/southern hemisphere
  const seasonIndex = month === 12 ? 0 : Math.floor(month / 3);

  const season =
    latitude < 0
      ? ['summer', 'autumn', 'winter', 'spring'][seasonIndex]
      : ['winter', 'spring', 'summer', 'autumn'][seasonIndex];

  const timeOfDay = ['night', 'morning', 'afternoon', 'evening'][
    Math.floor(hours / 6)
  ];
  const tags = [season, timeOfDay, 'landscape', 'nature'];

  return tags;
};

export default createImageTags;
