const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  objChain: [],
  getLength() {
    return this.objChain.length;
  },
  addLink(value) {
    this.objChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      !Number(position) ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.objChain.length
    ) {
      this.objChain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.objChain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.objChain.reverse();
    return this;
  },
  finishChain() {
    let resStr = this.objChain.join("~~");
    this.objChain = [];
    return resStr;
  },
};

module.exports = {
  chainMaker,
};
