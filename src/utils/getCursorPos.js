const getCursorPos = (e) => {
  const x = e.pageX - e.target.offsetLeft;
  const y = e.pageY - e.target.offsetTop;

  return { x, y };
};

export default getCursorPos;
