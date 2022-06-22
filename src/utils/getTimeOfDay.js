const getTimeOfDay = () => {
  const hours = new Date().getHours();

  return hours >= 6 && hours < 12
    ? 'morning'
    : hours >= 12 && hours < 18
    ? 'afternoon'
    : hours >= 18 && hours < 24
    ? 'evening'
    : 'night';
};

export default getTimeOfDay;
