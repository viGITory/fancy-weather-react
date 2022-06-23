import './HoverGlow.css';

const HoverGlow = ({ coordX, coordY, opacity }) => {
  return (
    <span
      className="hover-glow"
      style={{
        transform: `translate(${coordX}px, ${coordY}px)`,
        opacity: opacity,
      }}
    ></span>
  );
};

export default HoverGlow;
