'use strict';

var m;
var n;
var gcd;
var r;
var greatestCommonDivisor;

module.exports = {
  greatestCommonDivisor: function (m, n) {
  if((m % n) === 0) {
    gcd = n;
    console.log("Greatest Common Divisor is " + n);
    return gcd;
  } else {
    r = m % n;
    return this.greatestCommonDivisor(n, r);
  }
}
};

 //console.log("values given are: "+ m + "& " + n);
 //this.greatestCommonDivisor(m, n);
