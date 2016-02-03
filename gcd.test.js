'use strict';

var gcd = require('./gcd.js');
var assert = require('assert');

describe('Greatest Common Denominator', function() {
	it('GCD of 10 & 2 is 2', function (done) {
		assert.equal(gcd.greatestCommonDivisor(10,2), 2);
		done();
	});
	it('GCD of 13 & 13 is 13', function (done) {
		assert.equal(gcd.greatestCommonDivisor(13,13), 13);
		done();
	});
	it('GCD of 125 & 5 is 5', function (done) {
		assert.equal(gcd.greatestCommonDivisor(125,5), 5);
		done();
	});
	it('GCD of 624129 & 2061517 is 18913', function (done) {
		assert.equal(gcd.greatestCommonDivisor(2061517,624129), 18913);
		done();
	});
	it('GCD of 600 & 37 is 1', function (done) {
		assert.equal(gcd.greatestCommonDivisor(600,37), 1);
		done();
	});
});