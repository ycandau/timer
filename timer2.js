// timer2.js

// Sound output not working
const beep = () => console.log('Beep!');

const setTimers = (delays) =>
  delays.forEach((delay) => setTimeout(beep, delay * 1000));

const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  switch (key) {
    case 'b':
      return beep();
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      const n = Number(key);
      console.log(`Setting timer for ${n} seconds...`);
      return setTimeout(beep, n * 1000);
    case '\u0003':
      console.log('Thanks for using me, ciao!');
      return process.exit();
    default:
      return console.log("I don't understand.");
  }
});
