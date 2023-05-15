'use strict';

// const { duration } = require('moment/moment');
// console.log(duration);

/*------------------------------------------------------------------------------
Full description atL https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week4#exercise-2-whats-your-monday-worth

- Complete the function names `computeEarnings`. It should take an array of
  tasks and an hourly rate as arguments and return a formatted Euro amount
  (e.g: `€11.34`) comprising the total earnings.
- Use the `map` array function to take out the duration time for each task.
- Multiply each duration by a hourly rate for billing and sum it all up.
- Make sure the program can be used on any array of objects that contain a
  `duration` property with a number value.
------------------------------------------------------------------------------*/
const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

const hourlyRate = 25;

function computeEarnings(mondayTasks, hourlyRate) {
  let counter = 0;
  for (const item of mondayTasks) {
    counter = typeof item.duration === 'number' ? ++counter : 0;
  }

  if (counter === mondayTasks.length) {
    const workHours = mondayTasks.map((task) => task.duration);
    const sumWorkHours = workHours.reduce((accum, item) => {
      accum += item;
      return accum;
    });

    return `€${((sumWorkHours / 60) * hourlyRate).toFixed(2)}`;
  } else {
    console.log('One of the duration property is not a number');
    return 0;
  }
}
computeEarnings(mondayTasks, hourlyRate);

// ! Unit tests (using Jest)
describe('computeEarnings', () => {
  test('should take two parameters', () => {
    // The `.length` property indicates the number of parameters expected by
    // the function.
    expect(computeEarnings).toHaveLength(2);
  });

  test('should compute the earnings as a formatted Euro amount', () => {
    const result = computeEarnings(mondayTasks, hourlyRate);
    const expected = '€187.50';
    expect(result).toBe(expected);
  });
});
