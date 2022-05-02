const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(machine) {
    this.machine = machine;
  }
  encrypt(message, key) {
    let letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    let mesArray = message.toUpperCase().split("");
    let keyArray = key.toUpperCase().split("");
    let keyNew = keyArray;
    while (keyArray.length < mesArray.length) {
      keyArray = keyArray.concat(keyNew);
    }
    let ind = -1;
    let stringMes = mesArray.map((item) => {
      if (letters.includes(item)) {
        ind++;
        return letters[
          (letters.indexOf(item) + letters.indexOf(keyArray[ind])) % 26
        ];
      } else {
        return item;
      }
    });
    if (this.machine === false) {
      return stringMes.reverse().join("");
    } else {
      return stringMes.join("");
    }
  }
  decrypt(message, key) {
    let letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    let mesArray = message.toUpperCase().split("");
    let keyArray = key.toUpperCase().split("");
    let keyNew = keyArray;
    while (keyArray.length < mesArray.length) {
      keyArray = keyArray.concat(keyNew);
    }
    let ind = -1;
    let stringMes = mesArray.map((item) => {
      if (letters.includes(item)) {
        ind++;
        return letters[
          (letters.indexOf(item) - letters.indexOf(keyArray[ind]) + 26) % 26
        ];
      } else {
        return item;
      }
    });
    if (this.machine === false) {
      return stringMes.reverse().join("");
    } else {
      return stringMes.join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
