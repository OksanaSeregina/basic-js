const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = [];
  const arrStr = str.split("");
  let count = 0;

  for (let i = 0; i < arrStr.length; i++) {
    const item = arrStr[i];
    if (item !== arrStr[i + 1]) {
      res.push(item);
    } else {
      while (item === arrStr[i] && arrStr.length) {
        i++;
        count++;
      }
      i--;
      res.push(`${count}${item}`);
      count = 0;
    }
  }
  return res.join("");
}
module.exports = {
  encodeLine,
};
