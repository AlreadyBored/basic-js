const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	chain: [],
	getLength() {
		return this.chain.length
	},
	addLink(value) {
		this.chain.push(`(${value})`)
		return this
	},
	removeLink(position) {
		if (typeof position !== 'number'
			|| !Number.isInteger(position)
			|| position < 1
			|| position > this.chain.length) {

			this.chain = [];
			throw new Error('You can\'t remove incorrect link!');
		}
		let arr = this.chain.map((num, index) => { if (index !== (position - 1)) return num })
			.filter(x => x !== undefined);
		this.chain = arr;
		return this;

	},
	reverseChain() {
		this.chain.reverse();
		return this;
	},
	finishChain() {
		let result = this.chain.join('~~');
		this.chain = [];
		return result;
	}
};

module.exports = {
	chainMaker
};
