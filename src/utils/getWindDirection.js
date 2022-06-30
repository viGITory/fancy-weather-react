import translate from '../data/translate';

const getWindDirection = (windDegrees, lang) => {
  const windDirections = Object.keys(translate[lang].weather.wind.directions);

  let degrees = (windDegrees * 16) / 360;
  let directionIndex = 0;

  degrees = Math.round(degrees);
  directionIndex = (degrees + 16) % 16;

  return windDirections[directionIndex];
};

export default getWindDirection;
