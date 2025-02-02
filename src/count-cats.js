const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  const ears = "^^";

  const array = matrix.map((elem) => {
    const arr = [...elem];
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] === ears) {
        count++;
      }
    }
  });
  return count;
}

module.exports = {
  countCats,
};
