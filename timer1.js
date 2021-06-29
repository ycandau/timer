const readInput = () =>
  process.argv
    .slice(2)
    .map((str) => Number(str))
    .filter((x) => !Number.isNaN() && x > 0);

// Sound output not working
const beep = () => console.log('Beep!');

const setTimers = (delays) =>
  delays.forEach((delay) => setTimeout(beep, delay * 1000));

setTimers(readInput());
