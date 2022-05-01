const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const object = {};

  domains.forEach((elem) => {
    elem
      .split(".")
      .reverse()
      .reduce((res, el) => {
        res = res + `.${el}`;
        if (object[res]) {
          object[res]++;
        } else {
          object[res] = 1;
        }
        return res;
      }, "");
  });
  return object;
}

console.log(getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]));

module.exports = {
  getDNSStats,
};
