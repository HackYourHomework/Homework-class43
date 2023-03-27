'use strict';

function selectRandomly(array) {
  const randomly = array[Math.floor(Math.random() * array.length)];
  return randomly;
}

function tellFortune(numKids, partnerNames, locations, jobTitles) {
  return `You will be a ${selectRandomly(jobTitles)} in ${selectRandomly(
    locations
  )}, married to ${selectRandomly(partnerNames)} with ${selectRandomly(
    numKids
  )} kids.`;
}

function main() {
  const numKids = ['one', 'two', 'three', 'four', 'five'];

  const partnerNames = ['Tatiana', 'Julia', 'Elena', 'Simone', 'Anastasia'];

  const locations = ['Singapore', 'The Netherlands', 'Ukraine', 'USA', 'UK'];

  const jobTitles = [
    'Web Developer',
    'Programmer',
    'Carpenter',
    'Big Boss',
    'Product owner',
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
