/**
 * Convert date object or number to HH:MM:SS
 * @since 0.0.1
 * @param {(object|number)} [date=new Date()] Date object or date in milliseconds
 * @throws Error if param is not a date object or number
 * @returns {string} Time in HH:MM:SS format
 */
function dateToHMS(date = new Date()) {
  if (!(date instanceof Date) && isNaN(date)) {
    throw new Error('dateToHMS param must be Date object or number!');
  }
  if (!isNaN(date)) {
    date = new Date(date);
  }
  return date.toTimeString().slice(0, 8);
}

module.exports = dateToHMS;
