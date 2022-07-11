const getApiData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  return { response, data };
};

export default getApiData;
