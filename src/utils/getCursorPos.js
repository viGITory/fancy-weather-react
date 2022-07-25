const getCursorPos = (e, offsetParent) => {
  const rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  if (offsetParent) {
    x = e.clientX - e.target.offsetParent.offsetLeft;
    y = e.clientY - e.target.offsetParent.offsetTop;
  }

  return { x, y };
};

export default getCursorPos;
