const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let resArray = Array.from(arr);
  resArray.forEach((elem, ind) => {
    elem == "--discard-prev"
      ? ((resArray[ind - 1] = null), (resArray[ind] = null))
      : elem == "--double-prev"
      ? ind > 0
        ? (resArray[ind] = resArray[ind - 1])
        : (resArray[ind] = null)
      : elem == "--discard-next"
      ? ind + 1
        ? ((resArray[ind] = null), (resArray[ind + 1] = null))
        : (resArray[ind] = null)
      : elem == "--double-next"
      ? ind + 1
        ? (resArray[ind] = resArray[ind + 1])
        : (resArray[ind] = null)
      : null;
  });
  return resArray.filter((el) => el != null);
}

module.exports = {
  transform,
};
