/**
 * Futility
 * @module futility
*/
module.exports = {
	/**
	 * Swap Object keys and values
	 * @param {object} obj
	 * @returns {object} Object with keys & values swapped
	 */
	swapObject: (obj) => {
		const swapped = {};
		Object.keys(obj).forEach((key) => {
			swapped[obj[key]] = key;
		});
		return swapped;
	},

	/**
	 * Recursive function to deep clone an object. If a non object parameter
	 * is passed in, that parameter is returned and no recursion occurs.
	 * @param {(object|array)} obj Object to be cloned
	 * @returns {object} Cloned object
	 */
	cloneObject: function clone(obj) {
		if (obj === null || typeof obj !== 'object') return obj;
		if (obj instanceof Date) {
			const copy = new Date();
			copy.setTime(obj.getTime());
			return copy;
		}
		const temp = new obj.constructor(); // give temp the original obj's constructor
		Object.keys(obj).forEach((key) => {
			temp[key] = clone(obj[key]);
		});
		return temp;
	},

	/**
	 * p5.prototype.map() - https://p5js.org/reference/#/p5/map
	 * @param {number} n A positive or negative number
	 * @param {number} start1 Min possible value for n
	 * @param {number} stop1 Max possible value for n
	 * @param {number} start2 Min value for new range
	 * @param {number} stop2 Max value for new range
	 * @returns {number} Calculated n for given range
	 */
	mapN(n, start1, stop1, start2, stop2) {
		return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
	},

	/**
	 *  Calculate Percentage of
	 * @param {number} num
	 * @param {number} ofnum
	 * @param {number} [fix=0] how many decimals
	 * @returns {number} ( (num / ofnum) * 100 ).toFixed(fix)
	 */
	PercentageOf(num, ofnum, fix = 0) {
		return ((num / ofnum) * 100).toFixed(fix);
	},

	/**
	 * es6 style swap values, no more temp variable
	 * @param {*} a
	 * @param {*} b
	 * @returns {array} Array with values swapped -> [b, a]
	 */
	swapValues(a, b) {
		const [c, d] = [b, a];
		return [c, d];
	},

	/**
	 * Convert seconds to display time
	 * @param {number} secs Number in seconds
	 * @param {boolean} [long=false] Boolean to choose short or long display
	 * @returns {string} short: 14d 6h 53m 0s or long: 14 days, 6 hours, 53 minutes, 0 seconds
	 */
	secondsToDhms(secs, long = false) {
		if (isNaN(secs)) return 'secondsToHms param not a number!';
		const d = Math.floor(secs / (3600 * 24));
		const h = Math.floor((secs / 3600) % 24);
		const m = Math.floor(secs % (3600 / 60));
		const s = Math.floor(secs % 3600 % 60);

		const dDisplay = d > 0 ? d + (long ? (d === 1 ? ' day, ' : ' days, ') : 'd ') : '';
		const hDisplay = h >= 0 ? h + (long ? (h === 1 ? ' hour, ' : ' hours, ') : 'h ') : '';
		const mDisplay = m >= 0 ? m + (long ? (m === 1 ? ' minute, ' : ' minutes, ') : 'm ') : '';
		const sDisplay = s >= 0 ? s + (long ? (s === 1 ? ' second' : ' seconds') : 's') : '';
		return dDisplay + hDisplay + mDisplay + sDisplay;
	},

	/**
	 * dateToHMS
	 * @param {(object|number)} [date=new Date()] Date object or date in milliseconds
	 * @returns {string} Time in HH:MM:SS format
	 */
	dateToHMS: (date = new Date()) => {
		if (!(date instanceof Date) && isNaN(date)) {
			return 'dateToHMS param must be Date object or number!';
		}
		if (!isNaN(date)) {
			date = new Date(date);
		}
		const H = date.getHours();
		const M = date.getMinutes();
		const S = date.getSeconds();
		return `${H < 10 ? `0${H}` : H}:${M < 10 ? `0${M}` : M}:${S < 10 ? `0${S}` : S}`;
	},
};
