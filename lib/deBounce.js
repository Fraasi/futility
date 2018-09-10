/**
  * Debounce costly functions on scroll/resize etc
  * @param {function} func Function to run after delay
  * @param {number} [timeout=1000] Delay in milliseconds
  * @throws {TypeError} Error if first argument is not a function
  * @returns {number} TimerId if you want to clear timeout before function runs
  */
// Keep helper vars out of export, later check jsdoc underscore plugin
let _timerId = null;
function deBounce(func, timeout = 1000) {
  if (typeof func !== 'function') throw new TypeError('Debounce first argument must be a function!');
  clearTimeout(_timerId);
  _timerId = setTimeout(() => {
    func();
  }, timeout);
  return _timerId;
}

module.exports = deBounce;
