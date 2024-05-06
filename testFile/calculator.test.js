const { add, subtract } = require('./calculator.js');

test('add function', () => {
  console.log("HI");
  expect(add(1, 2)).toBe(3);
});

// test('subtract function', () => {
//   expect(subtract(1, 2)).toBe(-1);
// });