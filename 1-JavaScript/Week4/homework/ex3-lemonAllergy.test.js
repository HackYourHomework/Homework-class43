'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week4#exercise-3-lemon-allergy

Your mom bought you a basket of fruit, because you're doing so well in
HackYourFuture. How sweet of her!

However, she forgot that you are allergic to lemons! Let's quickly dispose of
them before you get an attack.

Complete the function called `sanitizeFruitBasket`:

- It should take two parameters: an array of strings representing a fruit basket 
  to be sanitized and a string indicating the name of the fruit to be taken out.
- Use the `filter` array method to take out the unwanted fruit.
- Return a new array that contains the fruits without any lemons.
------------------------------------------------------------------------------*/
const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

// ! Function under test
function sanitizeFruitBasket(fruits, lemon) {
  // TODO complete this function
  const result = [...fruits];
  return result.filter((fruit) => fruit !== lemon);
}
sanitizeFruitBasket(fruitBasket, 'lemon');

// ! Unit tests (using Jest)
describe('sanitizeFruitBasket', () => {
  test('should take two parameters', () => {
    // TODO replace next line with your code
    expect(sanitizeFruitBasket).toHaveLength(2);
  });

  test('should not modify the original `fruitBasket` array', () => {
    // Save the original contents of the fruit basket
    const originalFruitBasketContents = [...fruitBasket];

    sanitizeFruitBasket(fruitBasket, 'lemon');
    expect(fruitBasket).toEqual(originalFruitBasketContents);
    //Another solution with JSON.stringify
    // expect(
    //   JSON.stringify(originalFruitBasketContents) ===
    //     JSON.stringify(fruitBasket)
    // );
  });

  test('should return a new array that does not include the unwanted `lemon`', () => {
    const sanitizedBasket = sanitizeFruitBasket(fruitBasket, 'lemon');
    expect(sanitizedBasket).toEqual([
      'apple',
      'grapefruit',
      'banana',
      'watermelon',
    ]);
  });
});
