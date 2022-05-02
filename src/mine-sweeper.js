const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = matrix.map((r) => {
    return r.map((e) => {
      return 0;
    });
  });
  matrix.forEach((row, rowIndex) => {
    row.forEach((element, elementIndex) => {
      if (element) {
        result[rowIndex][elementIndex] = true;
        if (
          result[rowIndex] &&
          result[rowIndex][elementIndex - 1] !== undefined &&
          result[rowIndex][elementIndex - 1] !== true
        ) {
          result[rowIndex][elementIndex - 1] += 1;
        }
        if (
          result[rowIndex] &&
          result[rowIndex][elementIndex + 1] !== undefined &&
          result[rowIndex][elementIndex + 1] !== true
        ) {
          result[rowIndex][elementIndex + 1] += 1;
        }

        if (
          result[rowIndex - 1] &&
          result[rowIndex - 1][elementIndex - 1] !== undefined &&
          result[rowIndex - 1][elementIndex - 1] !== true
        ) {
          result[rowIndex - 1][elementIndex - 1] += 1;
        }
        if (
          result[rowIndex - 1] &&
          result[rowIndex - 1][elementIndex] !== undefined &&
          result[rowIndex - 1][elementIndex] !== true
        ) {
          result[rowIndex - 1][elementIndex] += 1;
        }
        if (
          result[rowIndex - 1] &&
          result[rowIndex - 1][elementIndex + 1] !== undefined &&
          result[rowIndex - 1][elementIndex + 1] !== true
        ) {
          result[rowIndex - 1][elementIndex + 1] += 1;
        }

        if (
          result[rowIndex + 1] &&
          result[rowIndex + 1][elementIndex - 1] !== undefined &&
          result[rowIndex + 1][elementIndex - 1] !== true
        ) {
          result[rowIndex + 1][elementIndex - 1] += 1;
        }
        if (
          result[rowIndex + 1] &&
          result[rowIndex + 1][elementIndex] !== undefined &&
          result[rowIndex + 1][elementIndex] !== true
        ) {
          result[rowIndex + 1][elementIndex] += 1;
        }
        if (
          result[rowIndex + 1] &&
          result[rowIndex + 1][elementIndex + 1] !== undefined &&
          result[rowIndex + 1][elementIndex + 1] !== true
        ) {
          result[rowIndex + 1][elementIndex + 1] += 1;
        }
      }
    });
  });
  return result.map((r) => {
    return r.map((e) => (e === true ? 1 : e));
  });
}

module.exports = {
  minesweeper,
};
