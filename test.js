
const F = require('./futility.js');


console.log(F.secondsToDhms(1234380, false));
console.log(F.secondsToDhms(14234380, true));
console.log(F.secondsToDhms(1234434380));

// console.log(F.PercentageOf(232, 50, 2));
// console.log(F.swapValues(1, 2));

// console.log(F.swapObject({ a: 1, b: 2 }));

console.log(F.cloneObject({ a: 1, b: 2 }));
