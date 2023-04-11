/* eslint-disable no-restricted-syntax */
'use strict';

const cartForParty = {
  beers: 1.75,
  chips: 0.99,
  coke: 1.2,
  water: 0.75,
  nuts: 4.3,
};

function calculateTotalPrice(shoppingCart) {
  const amount = Object.values(shoppingCart).reduce(
    (item1, item2) => item1 + item2
  );

  return `Total: €${amount}`;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  const prediction1 = calculateTotalPrice.length === 1;
  console.assert(prediction1);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  console.log(calculateTotalPrice(cartForParty));
  const prediction2 =
    calculateTotalPrice(cartForParty) !== undefined || NaN || null;
  console.assert(prediction2);
}

function test() {
  test1();
  test2();
}

test();
