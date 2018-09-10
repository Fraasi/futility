/**
 * Random number or item from array  
 * @since 0.0.3
 * @example random(5, 10); // returns floating point number between 5 and 10
 * Math.round(random(10)); // returns integer between 0 and 10
 * @param {number|array} [min] Minimum number or array
 * @param {number} [max] Maximum number
 * @returns {mixed} If no parameters, a random number between 0 and 1  
 * if number, a random number between 0 and number
 * if two numbers, a random number between those numbers  
 * if array, a random item from that array
 */
function random(min, max) {
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
}

module.exports = random;
