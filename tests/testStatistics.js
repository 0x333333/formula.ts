'use strict';

var Statistics = require('../index').Statistics;
var chai = require('chai');
var expect = chai.expect;


describe('Statistics', function () {
	// instance subject to testing
	var subject;

    beforeEach(function () {
        subject = new Statistics();
    });

	describe('#add', function () {
        it('should add two numbers together', function () {
            var result = subject.add(2, 3);
            if (result !== 5) {
                throw new Error('Expected 2 + 3 = 5 but was ' + result);
            }
        });
    });
});