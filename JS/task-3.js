const findBestEmployee = function (employees) {
  "use strict";
  // Write code under this line
  let BestEmployee = "";
  const values = Object.values(employees);
  const Maxemploy = Math.max(...values);
  const oneEmployee = Object.keys(employees);
  for (const key of oneEmployee) {
    if (employees[key] === Maxemploy) {
      BestEmployee = key;
    }
  }
  return BestEmployee;
};

const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
