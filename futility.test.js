/* eslint-disable no-undef */
const F = require('./futility.js');

describe('mapN', () => {
	test('mapN 5 from 0-10 to 0-100', () => {
		expect(F.mapN(5, 0, 10, 0, 100))
			.toBe(50);
	});
	test('mapN -5 from 0-10 to 0-100', () => {
		expect(F.mapN(-5, -10, 10, -100, 100))
			.not.toBe(50);
	});
});

describe('dateToHMS', () => {
	test('Date object to HH:MM:SS', () => {
		expect(F.dateToHMS(new Date(2000, 3, 2, 12, 12, 12)))
			.toBe('12:12:12');
	});

	test('Seconds to HH:MM:SS', () => {
		expect(F.dateToHMS(123456789))
			.toBe('12:17:36');
	});
});

describe('percentageOF', () => {
	test('23%? of 87', () => {
		expect(F.PercentageOf(23, 87))
			.toBe(26);
	});

	test('452%? of 1210 toFixed(1)', () => {
		expect(F.PercentageOf(452, 1210, 1))
			.toBe(37.4);
	});
});

const testObj = {
	a: [{ a: 1, b: { j: new Date() } }, { c: 3, d: 4 }],
	b: 2,
	c: 'string',
};

describe('cloneObject', () => {
	const obj2 = F.cloneObject(testObj);
	obj2.a[1].d = 170;
	test('testObj to be not same as cloned & modified object', () => {
		expect(obj2)
			.not.toBe(testObj);
	});
	test('testObj to be not equal to cloned & modified object', () => {
		expect(obj2)
			.not.toEqual(testObj);
	});
	const obj3 = F.cloneObject(testObj);
	test('testObj with date to not be same as cloned', () => {
		expect(obj3)
			.not.toBe(testObj);
	});
	test('testObj with date to be equal as cloned', () => {
		expect(obj3)
			.toEqual(testObj);
	});
});

describe('secsToDHMS', () => {
	test('3642, false', () => {
		expect(F.secondsToDhms(3642, false))
			.toBe('1h 0m 42s');
	});
	test('14234380, true', () => {
		expect(F.secondsToDhms(14234380, true))
			.toBe('164 days, 17 hours, 59 minutes, 40 seconds');
	});
	test('123456789', () => {
		expect(F.secondsToDhms(123456789))
			.toBe('1428d 21h 33m 9s');
	});
});

describe('deBounce', () => {
	test('should return a number > 20', () => {
		expect(F.deBounce(() => {
			console.log('debounce');
		}))
		.toBeGreaterThan(20);
	});
	test('throw typeerror if first param is not a function', () => {
		expect(() => {
			F.deBounce(2000);
		})
		.toThrow(TypeError);
	});
});

describe('swapObject', () => {
	const testObj2 = {
		a: 'aa',
		b: 'bb',
		c: 'string',
	};
	const testObj3 = {
		aa: 'a',
		bb: 'b',
		string: 'c',
	};
	test('should throw if value is not a string', () => {
		expect(() => {
			F.swapObject(testObj)
			.toThrow(TypeError);
		});
	});
	test('should swap wihout errors', () => {
		expect(F.swapObject(testObj2))
		.toEqual(testObj3);
	});
});
