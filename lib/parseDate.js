/**
 * Few ways to parse date object. Replaces YYYYMMDD
 * @since 0.0.5
 * @param {date} [date=new Date()] Date object
 * @param {string} [sep='/'] Separator
 * @param {boolean} [time=true] Include time or not
 * @param {boolean} [hour12=false] 12 hour clock or 24
 * @param {boolean} [reverse=false] reverse DDMMYYY to YYYYMMDD or not 
 * @throws Error if ***date*** is not a date object
 * @returns {string} Year, month and day separated by ***sep*** 
 *                   and optionally time in HH:MM:SS format, 12 or 24 hours
 * @example
 * parseDate(undefined, '-'); // returns current date formatted with - and current time,
 * e.g. 13-09-2018, 14:04:23
 * @example
 * const date = new Date(2012, 12, 28, 23, 59, 59)
 * parseDate(date, undefined, undefined, true, true);
 * // returns 2012/12/28, 11:59:59 PM
 */
function parseDate(date = new Date(), sep = '/', time = true, hour12 = false, reverse = false) {
  if (!(date instanceof Date)) throw new TypeError('Date must be valid Date object!');
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const parsedTime = time
    ? `, ${date.toLocaleTimeString('de', { hour12 })}`
    : '';
  const reversed = reverse
    ? date.getFullYear() + sep + (month < 10 ? `0${month}` : month) + sep + (day < 10 ? `0${day}` : day)
    : (day < 10 ? `0${day}` : day) + sep + (month < 10 ? `0${month}` : month) + sep + date.getFullYear();
  return reversed + parsedTime;
}

module.exports = parseDate;
