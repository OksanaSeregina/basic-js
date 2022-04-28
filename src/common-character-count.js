const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;

  const arr1 = s1.split("");
  const arr2 = s2.split("");
  for (let i = 0; i <= arr1.length; i++) {
    const result = arr2.indexOf(arr1[i]);
    if (result !== -1) {
      sum++;

      arr2[result] = "";
    }
  }
  return sum;
}

module.exports = {
  getCommonCharacterCount,
};
