/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  var deltaX = secondPoint.X - firstPoint.X;
  var deltaY = secondPoint.Y - firstPoint.Y;
  return parseFloat(Math.sqrt(deltaX * deltaX + deltaY * deltaY).toFixed(2));
};
