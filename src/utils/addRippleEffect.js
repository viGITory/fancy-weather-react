const addRippleEffect = (e) => {
  e.preventDefault();

  const circle = document.createElement('span');
  circle.classList.add('ripple-circle');

  e.target.appendChild(circle);

  setTimeout(() => circle.remove(), 500);
};

export default addRippleEffect;
