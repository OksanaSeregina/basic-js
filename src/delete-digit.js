const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = (n + "").split("");

  const newArr = array.map((elem, ind, arr) => {
    let newArr2 = arr.slice();
    newArr2.splice(ind, 1);
    return newArr2.join("");
  });
  return Math.max(...newArr);
}

module.exports = {
  deleteDigit,
};
