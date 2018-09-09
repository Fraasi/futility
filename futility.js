/**
 * @author {@link https://github.com/Fraasi|Fraasi}
 * @file Little utility library - {@link https://github.com/Fraasi/futility|Github repo}
 * @module futility
 */
// Keep helper vars out of export, later check jsdoc underscore plugin
let _timerId = null;

module.exports = {
  /**
   * Shallow swap of object keys and values, every value must be a string
   * @param {object} obj
   * @throws {TypeError} Error if objects value is not a String
   * @returns {object} Object with keys & values swapped
   */
  swapObject: (obj) => {
    const swapped = {};
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] !== 'string') throw new TypeError('swapObject value must be a string!');
      swapped[obj[key]] = key;
    });
    return swapped;
  },

  /**
   * Recursive function to deep clone an object. If a non object parameter
   * is passed in, that parameter is returned and no recursion occurs.
   * @see {@link https://heyjavascript.com/4-creative-ways-to-clone-objects/}
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
   * Maps given number from one range to another
   * @see {@link https://p5js.org/reference/#/p5/map|p5.prototype.map()}
   * @param {number} n A positive or negative number
   * @param {number} start1 Min possible value for n
   * @param {number} stop1 Max possible value for n
   * @param {number} start2 Min value for new range
   * @param {number} stop2 Max value for new range
   * @returns {number} Calculated n for new range
   */
  mapN(n, start1, stop1, start2, stop2) {
    return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  },

  /**
   *  Calculate percentage: ***num*** is what percent of ***ofnum***
   * @param {number} num
   * @param {number} ofnum
   * @param {number} [dec=0] Decimals
   * @returns {number} ( (num / ofnum) * 100 ).toFixed(fix)
   */
  percentageOf(num, ofnum, dec = 0) {
    return Number(((num / ofnum) * 100).toFixed(dec));
  },

  /**
   * Convert seconds to display time
   * @param {number} secs Number in seconds
   * @param {boolean} [long=false] Boolean to choose short or long display
   * @returns {string} short: 14d 6h 53m 0s  
   * long: 14 days, 6 hours, 53 minutes, 0 seconds
   */
  secondsToDhms(secs, long = false) {
    if (isNaN(secs)) return 'secondsToHms parameter not a number!';
    const d = Math.floor(secs / (3600 * 24));
    const h = Math.floor((secs / 3600) % 24);
    const m = Math.floor((secs / 60) % 60);
    const s = Math.floor(secs % 60);

    const dDisplay = d > 0 ? d + (long ? (d === 1 ? ' day, ' : ' days, ') : 'd ') : '';
    const hDisplay = h >= 0 ? h + (long ? (h === 1 ? ' hour, ' : ' hours, ') : 'h ') : '';
    const mDisplay = m >= 0 ? m + (long ? (m === 1 ? ' minute, ' : ' minutes, ') : 'm ') : '';
    const sDisplay = s >= 0 ? s + (long ? (s === 1 ? ' second' : ' seconds') : 's') : '';
    return dDisplay + hDisplay + mDisplay + sDisplay;
  },

  /**
   * Convert date object or number to HH:MM:SS
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
    return date.toTimeString().slice(0, 8);
  },

  /**
   * Debounce costly functions on scroll/resize etc
   * @param {function} func Function to run after delay
   * @param {number} [timeout=1000] Delay in milliseconds
   * @throws {TypeError} Error if first argument is not a function
   * @returns {number} TimerId if you want to clear timeout before function runs
   */
  deBounce: (func, timeout = 1000) => {
    if (typeof func !== 'function') throw new TypeError('Debounce first argument must be a function!');
    clearTimeout(_timerId);
    _timerId = setTimeout(() => {
      func();
    }, timeout);
    return _timerId;
  },

  /**
   * Random number or item from array  
   * @example random(5, 10) // returns floating point number between 5 and 10
   * Math.round(random(10)) // returns integer between 0 and 10
   * @param {number|array} [min] Minimum number or array
   * @param {number} [max] Maximum number
   * @returns {mixed} If no parameters, a random number between 0 and 1  
   * if number, a random number between 0 and number, not including number  
   * if two numbers, a random number between those numbers  
   * if array, a random item from that array
   */
  random: function random(min, max) {
    const rand = Math.random();
    if (arguments.length === 0) return rand;
    if (arguments.length === 1) {
      if (typeof min === 'number') return rand * min;
      if (Array.isArray(min)) return min[Math.floor(rand * min.length)];
    }
    if (arguments.length === 2) {
      if (min > max) {
        [max, min] = [min, max];
      }
      return rand * (max - min) + min;
    }
    return 'Err, invalid arguments to random method';
  },
};
