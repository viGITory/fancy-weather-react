const getCursorPos = (e, offsetParent) => {
  let x = 0;
  let y = 0;

  if (offsetParent) {
    x = e.pageX - e.target.offsetParent.offsetLeft;
    y = e.pageY - e.target.offsetParent.offsetTop;
  } else {
    x = e.pageX - e.target.offsetLeft;
    y = e.pageY - e.target.offsetTop;
  }

  return { x, y };
};

export default getCursorPos;
