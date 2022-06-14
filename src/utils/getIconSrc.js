const getIconSrc = ({ iconId, iconCode, uvIndex, tempDiff, windSpeed }) => {
  let src = './assets/weather-icons/';

  if (iconId && iconCode) {
    if (iconId >= 200 && iconId <= 232) {
      iconId <= 202
        ? (src = src + 'thunderstorm-rain.svg')
        : (src = src + 'thunderstorm.svg');
    }

    if (iconId >= 300 && iconId <= 321) {
      src = src + 'drizzle.svg';
    }

    if (iconId >= 500 && iconId <= 531) {
      src = src + 'rain.svg';
    }

    if (iconId >= 600 && iconId <= 622) {
      iconId >= 611 && iconId <= 613
        ? (src = src + 'sleet.svg')
        : (src = src + 'snow.svg');
    }

    if (iconId > 700 && iconId <= 781) {
      iconId === 701
        ? (src = src + 'mist.svg')
        : iconId === 711
        ? (src = src + 'smoke.svg')
        : iconId === 721
        ? (src = src + 'haze.svg')
        : iconId === 731 || iconId === 751
        ? (src = src + 'sand.svg')
        : iconId === 741
        ? (src = src + 'fog.svg')
        : iconId === 781
        ? (src = src + 'tornado.svg')
        : (src = src + 'dust.svg');
    }

    if (iconId === 800) {
      iconCode === '01d'
        ? (src = src + 'clear-day.svg')
        : (src = src + 'clear-night.svg');
    }

    if (iconId > 800 && iconId <= 804) {
      if (iconId === 801)
        iconCode === '02d'
          ? (src = src + 'partly-cloudy-day.svg')
          : (src = src + 'partly-cloudy-night.svg');
    }

    if (iconId > 801 && iconId < 804)
      iconCode === '03d' || iconCode === '04d'
        ? (src = src + 'cloudy-day.svg')
        : (src = src + 'cloudy-night.svg');

    if (iconId === 804) src = src + 'cloudy.svg';
  }

  if (uvIndex || uvIndex === 0) {
    src = src + `uv-index-${Math.round(uvIndex)}.svg`;
  }

  if (tempDiff) {
    tempDiff === 'warmer'
      ? (src = src + 'thermometer-warmer.svg')
      : tempDiff === 'colder'
      ? (src = src + 'thermometer-colder.svg')
      : (src = src + 'thermometer-celsius.svg');
  }

  if (windSpeed || windSpeed === 0) {
    let beaufortIndex = 0;

    windSpeed >= 0 && windSpeed <= 0.2
      ? (beaufortIndex = 0)
      : windSpeed >= 0.3 && windSpeed <= 1.5
      ? (beaufortIndex = 1)
      : windSpeed >= 1.6 && windSpeed <= 3.3
      ? (beaufortIndex = 2)
      : windSpeed >= 3.4 && windSpeed <= 5.4
      ? (beaufortIndex = 3)
      : windSpeed >= 5.5 && windSpeed <= 7.9
      ? (beaufortIndex = 4)
      : windSpeed >= 8 && windSpeed <= 10.7
      ? (beaufortIndex = 5)
      : windSpeed >= 10.8 && windSpeed <= 13.8
      ? (beaufortIndex = 6)
      : windSpeed >= 13.9 && windSpeed <= 17.1
      ? (beaufortIndex = 7)
      : windSpeed >= 17.2 && windSpeed <= 20.7
      ? (beaufortIndex = 8)
      : windSpeed >= 20.8 && windSpeed <= 24.4
      ? (beaufortIndex = 9)
      : windSpeed >= 24.5 && windSpeed <= 28.4
      ? (beaufortIndex = 10)
      : windSpeed >= 28.5 && windSpeed <= 32.6
      ? (beaufortIndex = 11)
      : (beaufortIndex = 12);

    src = src + `wind-beaufort-${beaufortIndex}.svg`;
  }

  return src;
};

export default getIconSrc;
