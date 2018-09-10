/**
 *  Calculate percentage: ***num*** is what percent of ***ofnum***
 * @param {number} num
 * @param {number} ofnum
 * @param {number} [dec=0] Decimals
 * @returns {number} ( (num / ofnum) * 100 ).toFixed(fix)
 */
function percentageOf(num, ofnum, dec = 0) {
  return Number(((num / ofnum) * 100).toFixed(dec));
}

module.exports = percentageOf;
