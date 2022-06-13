const windDirections = [
  'N',
  'NNE',
  'NE',
  'ENE',
  'E',
  'ESE',
  'SE',
  'SSE',
  'S',
  'SSW',
  'SW',
  'WSW',
  'W',
  'WNW',
  'NW',
  'NNW',
];

const getWindDirection = (windDegrees) => {
  let degrees = (windDegrees * 16) / 360;

  degrees = Math.round(degrees);
  degrees = (degrees + 16) % 16;

  return windDirections[degrees];
};

export default getWindDirection;
