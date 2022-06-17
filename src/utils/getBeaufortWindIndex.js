const getBeaufortWindIndex = (windSpeed) => {
  let beaufortIndex;
  windSpeed = windSpeed.toFixed(1);

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

  return beaufortIndex;
};

export default getBeaufortWindIndex;
