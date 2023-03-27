'use strict';

function giveCompliment(name) {
  const compliments = [
    'great',
    'awesome',
    'cool',
    'honest',
    'clever',
    'friendly',
    'result-driven',
    'good team player',
    'outgoing',
    'kind',
  ];

  return `You are ${
    compliments[Math.floor(Math.random() * compliments.length)]
  }, ${name}!`;
}

function main() {
  const myName = 'Valentyn';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Amsterdam';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;
