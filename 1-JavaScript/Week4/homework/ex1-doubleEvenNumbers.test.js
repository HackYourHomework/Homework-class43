
function doubleEvenNumbers(numbers) {
  const newNumbers = [];
  const evenNumbers = numbers
      .filter (num => num % 2 === 0)
      .map (num => num * 2)

  for (const number of evenNumbers){
    newNumbers.push(number)
  }

  return newNumbers;
}

// ! Unit test (using Jest)
test('doubleEvenNumbers should take the even numbers and double them', () => {
  const actual = doubleEvenNumbers([1, 2, 3, 4]);
  const expected = [4, 8];
  expect(actual).toEqual(expected);
});
