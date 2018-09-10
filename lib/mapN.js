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
function mapN(n, start1, stop1, start2, stop2) {
  return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

module.exports = mapN;
