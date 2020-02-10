const chai = require('chai');
const { expect, assert } = chai;
const sinon = require('sinon');
it.optional = require('../extensions/it-optional');

Object.freeze(assert);

const DepthCalculator = require('../src/recursive-depth.js');
const instance = new DepthCalculator();
const calculateDepth = instance.calculateDepth.bind(instance);

const createFlatArr = (length) => Array.from({length}, () => Math.floor(Math.random() * length));

describe('Recursive depth', () => {
    //Presence requirement
    describe('variable presence', () => {
        it.optional('function calculateDepth exists', () => {
            expect(instance.calculateDepth).to.exist;
        });
    });

    //Functional requirements
    describe('functional requirements', () => {
        it.optional('returns correct depth of flat arrays', () => {
            for (let i = 1; i < 100; i++) {
                const flatArr = createFlatArr(i);
                assert.equal(calculateDepth(flatArr), 1);
            }
        });
        it.optional('returns correct depth of nested arrays', () => {
            assert.equal(calculateDepth([1, 2, 3, 4, 5, [1]]), 2);
            assert.equal(calculateDepth([1, 2, 3, [1], 4, 5, [1]]), 2);
            assert.equal(calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]), 3);
            assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]), 4);
            assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 5);
            assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 15);
            assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 25);
            assert.equal(calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 31);
        });
        it.optional('works recursively', () => {
            const spy1 = sinon.spy(instance, 'calculateDepth');
            assert.equal(calculateDepth([1, 2, 3, 4, 5, [1, []]]), 3);
            expect(spy1.callCount).to.be.greaterThan(1);
            spy1.restore();
            const spy2 = sinon.spy(instance, 'calculateDepth');
            assert.equal(calculateDepth([[[[[]]]]]), 5);
            expect(spy2.callCount).to.be.greaterThan(1);
            spy2.restore();
        });
    });
});
