const countTotalSalary = function (employees) {
  "use strict";
  // Write code under this line
  let Totalsalary = 0;
  const values = Object.values(employees);
  for (const value of values) {
    Totalsalary += value;
  }
  return Totalsalary;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
