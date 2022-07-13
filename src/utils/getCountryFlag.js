const getCountryFlag = async (countryCode) => {
  const url = await fetch(`https://flagcdn.com/${countryCode}.svg`).then(
    (response) => response.url
  );

  return url;
};

export default getCountryFlag;
