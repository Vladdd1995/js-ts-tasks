/**
 * Check if an {object} contains property {prop}
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
module.exports.hasProperty = function hasProperty(object, prop) {
  if (Object.prototype.hasOwnProperty.call(object, prop)) {
    return true;
  }
  return prop in object;
};
