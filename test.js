
/* eslint-disable */
const F = require('./futility.js');

const obj = [{ a: 1, b: {j: new Date()} }, {c: 3, d: 4}];

// console.log(F.secondsToDhms(1234380, false));
// console.log(F.secondsToDhms(14234380, true));
// console.log(F.secondsToDhms(1234434380));

// console.log(F.PercentageOf(232, 50, 2));
// console.log(F.swapValues(1, 2));

// console.log(F.swapObject({ a: 1, b: 2 }));

const obj2 = F.cloneObject(obj);
obj2[1].d = 170;
// console.log(obj, obj2);

console.log(F.dateToHMS(1234567))
console.log(F.dateToHMS(15350096103755))
console.log(F.dateToHMS())
console.log(F.dateToHMS(new Date(1535009698751)))
console.log(F.dateToHMS('ass'))


// works
// function clone(obj) {
// 	if(obj == null || typeof(obj) != 'object') return obj;    
// 	var temp = new obj.constructor(); 
// 	for(var key in obj)
// 			temp[key] = clone(obj[key]);    
// 	return temp;
// }

// const obj2 = clone(obj);
// obj2.a = 10;
// console.log(obj, obj2);

function cloneSO(obj) {
	// Handle the 3 simple types, and null or undefined
	if (obj == null || typeof obj !== 'object') return obj;

	// Handle Date
	if (obj instanceof Date) {
		var copy = new Date();
		copy.setTime(obj.getTime());
		return copy;
	}

	// Handle Array
	if (obj instanceof Array) {
		var copy = [];
		for (let i = 0, len = obj.length; i < len; i++) {
			copy[i] = cloneSO(obj[i]);
		}
		return copy;
	}

	// Handle Object
	if (obj instanceof Object) {
		var copy = {};
		for (const attr in obj) {
			if (obj.hasOwnProperty(attr)) copy[attr] = cloneSO(obj[attr]);
		}
		return copy;
	}

	throw new Error("Unable to copy obj! Its type isn't supported.");
}
