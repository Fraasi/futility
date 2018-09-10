/**
 * Convert seconds to display time
 * @since 0.0.1
 * @param {number} secs Number in seconds
 * @param {boolean} [long=false] Boolean to choose short or long display
 * @returns {string} short: 14d 6h 53m 0s  
 * long: 14 days, 6 hours, 53 minutes, 0 seconds
 */
function secondsToDHMS(secs, long = false) {
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
}

module.exports = secondsToDHMS;
