/* eslint-disable no-undef */
const F = require('./lib/futility.js');
const mapN = require('./lib/mapN');

describe('mapN', () => {
	test('mapN 5 from 0-10 to 0-100', () => {
		expect(mapN(5, 0, 10, 0, 100))
			.toBe(50);
	});
	test('mapN -5 from 0-10 to 0-100', () => {
		expect(mapN(-5, -10, 10, -100, 100))
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
		expect(F.percentageOf(23, 87))
			.toBe(26);
	});

	test('452%? of 1210 toFixed(1)', () => {
		expect(F.percentageOf(452, 1210, 1))
			.toBe(37.4);
	});
});

const testObj = {
	a: [{ a: 1, b: { j: new Date() } }, { c: 3, d: 4 }],
	b: 2,
	c: 'string',
};

describe('cloneObject', () => {
	const obj2 = F.clone(testObj);
	obj2.a[1].d = 170;
	test('testObj to be not same as cloned & modified object', () => {
		expect(obj2)
			.not.toBe(testObj);
	});

	test('testObj to be not equal to cloned & modified object', () => {
		expect(obj2)
			.not.toEqual(testObj);
	});
	const obj3 = F.clone(testObj);
	test('testObj with date to not be same as cloned', () => {
		expect(obj3)
			.not.toBe(testObj);
	});
	test('testObj with date to be equal as cloned', () => {
		expect(obj3)
			.toEqual(testObj);
	});
});

describe('secondsToDHMS', () => {
	test('3642, false', () => {
		expect(F.secondsToDHMS(3642, false))
			.toBe('1h 0m 42s');
	});
	test('14234380, true', () => {
		expect(F.secondsToDHMS(14234380, true))
			.toBe('164 days, 17 hours, 59 minutes, 40 seconds');
	});
	test('123456789', () => {
		expect(F.secondsToDHMS(123456789))
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

describe('random', () => {
	test('should return random number 0-1', () => {
		expect(F.random()).toBeGreaterThanOrEqual(0);
		expect(F.random()).toBeLessThanOrEqual(1);
	});
	test('should return random item from array', () => {
		const arr = ['a1', 'a2', 'a3'];
		expect(F.random(arr)).toEqual(expect.stringContaining('a'));
	});
	test('should return random number between 10 & 15', () => {
		expect(F.random(10, 15)).toBeGreaterThanOrEqual(10);
		expect(F.random(10, 15)).toBeLessThanOrEqual(15);
		expect(F.random(15, 10)).toBeLessThanOrEqual(15);
	});
	test('should return random number between 0 & 10', () => {
		expect(F.random(10)).toBeGreaterThanOrEqual(0);
		expect(F.random(10)).toBeLessThanOrEqual(10);
	});
	test('should return Err', () => {
		expect(F.random('as')).toEqual(expect.stringMatching('Err'));
	});
});

describe('YYYYMMDD', () => {
	test('should return 2361/03/21 & 2009-02-14', () => {
		expect(F.YYYYMMDD(new Date(12345678909876))).toBe('2361/03/21');
		expect(F.YYYYMMDD(new Date(1234567890987), '-')).toBe('2009-02-14');
	});
});
