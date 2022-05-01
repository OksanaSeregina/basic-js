const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const res = [];
  const newStr = [String(str)];

  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.separator === undefined) options.separator = "+";
  if (options.addition === undefined) options.addition = "";
  if (options.additionRepeatTimes === undefined)
    options.additionRepeatTimes = 1;
  if (options.additionSeparator === undefined) options.additionSeparator = "|";

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    newStr.push(String(options.addition), options.additionSeparator);
  }
  newStr.pop();
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      if (i === 0) {
        res.push(newStr.join(""));
      } else {
        res.push(options.separator, newStr.join(""));
      }
    }
  }

  return res.join("");
}

module.exports = {
  repeater,
};
