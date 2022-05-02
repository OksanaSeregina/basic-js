const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const findNextIndex = (arr, index) => {
    if (arr[index]) {
      const tmp = arr.slice(index);
      const idx = tmp.findIndex((el) => el !== -1);
      return index + idx;
    }
  };
  arr.forEach((el, index) => {
    if (el === -1) {
      return;
    }
    const curr = arr[index];
    const nextIndex = findNextIndex(arr, index + 1);
    const next = arr[nextIndex];
    if (next && curr > next) {
      arr[index] = next;
      arr[nextIndex] = curr;
      sortByHeight(arr);
    }
  });
  return arr;
}

module.exports = {
  sortByHeight,
};
