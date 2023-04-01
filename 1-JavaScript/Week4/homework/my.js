
const arr = [1, 3, 36, 15, 8]
console.log(arr)



function doubleEvenNumbers(arr) {
  // TODO rewrite the function body using `map` and `filter`.
  // const newNumbers = [];
  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] % 2 === 0) {
  //     newNumbers.push(numbers[i] * 2);
  //   }
  

  const newNumbers = arr
  .filter(number => {
    return number % 2 === 0;
  })

  .map(number => {
    return number * 2;
  });
  //console.log(newNumbers)
 
console.log(newNumbers) //  72, 16 
}
doubleEvenNumbers(arr) // [ 1, 3, 36, 15, 8 ]