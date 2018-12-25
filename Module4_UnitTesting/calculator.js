'use strict';

class Calculator {
    add(...args) {
        return args.reduce((accum, val) => accum + val);
    }

    multiply(...args) {
        let necessaryPrecision = 0;
        // NOTE: additional actions to avoid issues during multyplaying float numbers
        const floatNumbers = args.filter(elem => {
            if (elem === 0) {
                throw new Error('It\'s impossible to multiply by 0');
            } else {
                return elem.toString().includes('.');
            }
        });
        if (floatNumbers.length > 0) {
            const numbersAfterDot = floatNumbers.map(elem => elem.toString().split('.')[1].length);
            necessaryPrecision = numbersAfterDot.reduce((accum, val) => accum + val);
        }
        return Number(args.reduce((accum, val) => accum * val).toFixed(necessaryPrecision));
    }
}

module.exports = Calculator;
