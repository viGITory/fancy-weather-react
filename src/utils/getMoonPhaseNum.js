const getMoonPhaseNum = (phase) => {
  return phase > 0 && phase < 0.25
    ? 1
    : phase === 0.25
    ? 2
    : phase > 0.25 && phase < 0.5
    ? 3
    : phase === 0.5
    ? 4
    : phase > 0.5 && phase < 0.75
    ? 5
    : phase === 0.75
    ? 6
    : phase > 0.75 && phase < 1
    ? 7
    : 0;
};

export default getMoonPhaseNum;
