/**
 * Recursive function to deep clone an object. If a non object parameter
 * is passed in, that parameter is returned and no recursion occurs.
 * @since 0.0.1
 * @see {@link https://heyjavascript.com/4-creative-ways-to-clone-objects/}
 * @param {(object|array)} obj Object to be cloned
 * @returns {object} Cloned object
 */
function clone(obj) {
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
}

module.exports = clone;
