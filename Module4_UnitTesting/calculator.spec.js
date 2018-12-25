'use strict';
const chai = require('chai');
const expect = chai.expect;

let Calculator = require('./calculator');

describe('Check calculator functions', () => {
    let instance;

    beforeEach(() => {
        instance = new Calculator();
    });

    it('check the add() function: should allow to call it for instance of Calculator class, positive result', () => {
        expect(typeof instance.add).to.equal('function');
        expect(instance.add(2, 2, 2)).to.equal(6);
    });

    it('check the add() function: negative and float result', () => {
        expect(instance.add(-4, 3.7, -25.034, -1453)).to.equal(-1478.334);
    });

    it('check the multiply() function: should allow to call it for instance of Calculator class, positive result', () => {
        expect(typeof instance.multiply).to.equal('function');
        expect(instance.multiply(2, 2, 2)).to.equal(8);
    });

    it('check the multiply() function: negative and float result', () => {
        expect(instance.multiply(2.3, 8.45, -15.087)).to.equal(-293.215845);
    });

    it('check the multiply() function: it\'s impossible to multiply on 0', () => {
        expect(() => instance.multiply(5, 7, 0)).to.throw('It\'s impossible to multiply by 0');
    });
});
