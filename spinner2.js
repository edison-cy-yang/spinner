for (let i = 0, delay = 100; i < 5; i++, delay += 200) {
  let spinner;
  switch(i) {
    case 0:
      spinner = '|';
      break;
    case 1:
      spinner = '/';
      break;
    case 2:
      spinner = '-';
      break;
    case 3:
      spinner = '\\';
      break;
    case 4:
      spinner = '|';
      break;
  }
  setTimeout(() => {
    process.stdout.write(`\r${spinner}     `);
  }, delay);
}