const numberOfInterations = 5;
let counter = 0;
const id = setInterval(() => {
  // runs every 2 seconds
  console.log(`[new] interval ${counter}`);
  counter++;
  if (counter === numberOfInterations) {
    clearInterval(id);
  }
}, 2000);
