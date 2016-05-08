'use strict';

var Formula = require('../index').Formula;
var chai = require('chai');
var expect = chai.expect;


describe('Formula', function () {
	// instance f to testing
	var f;

    beforeEach(function () {
        f = new Formula();
    });

	describe('#sum', function () {
        it('should sum two numbers together', function () {
            var result = f.SUM(2, 3);
            if (result !== 5) {
                throw new Error('Expected 2 + 3 = 5 but was ' + result);
            }
        });
    });
});