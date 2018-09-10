/**
 * Date separator formatting
 * @since 0.0.4
 * @param {date} [date=new Date()] Date object
 * @param {string} [sep='/'] Separator
 * @throws Error if ***date*** is not a date object
 * @returns {string} Year, month and day separated by ***sep***
 * @example
 * YYYYMMDD(undefined, '-'); // returns current date formatted with -, e.g. 2018-09-13
 */
function YYYYMMDD(date = new Date(), sep = '/') {
  if (!(date instanceof Date)) throw new TypeError('Date must be valid Date object!');
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return date.getFullYear() + sep + (month < 10 ? `0${month}` : month) + sep + (day < 10 ? `0${day}` : day);
}

module.exports = YYYYMMDD;
