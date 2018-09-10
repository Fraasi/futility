/**
 * Convert date object or number to HH:MM:SS
 * @param {(object|number)} [date=new Date()] Date object or date in milliseconds
 * @returns {string} Time in HH:MM:SS format
 */
function dateToHMS(date = new Date()) {
  if (!(date instanceof Date) && isNaN(date)) {
    return 'dateToHMS param must be Date object or number!';
  }
  if (!isNaN(date)) {
    date = new Date(date);
  }
  return date.toTimeString().slice(0, 8);
}

module.exports = dateToHMS;
