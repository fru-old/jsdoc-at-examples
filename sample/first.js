/**
 * @expose test0
 * @examples
 * isInteger(5)     // true
 * isInteger(5.0)   // true
 * isInteger(-5)    // true
 * isInteger(3.14)  // false
 * isInteger('foo') // false
 * isInteger(NaN)   // false
 */
// @expose test1
// @expose test2
// @expose test3
function isInteger(x) {
  return x === Math.floor(x);
}


(function(){
  /**
   * XSD shema type xsd:gYearMonth
   * @expose gYearMonth
   * @examples
   * gYearMonth.test('1989-05')    // true
   * gYearMonth.test('2099-10')    // true
   * gYearMonth.test('2000-01-01') // false
   * gYearMonth.test('99-01')      // false
   * gYearMonth.test('2100-01')    // false
   */
  var gYearMonth = /^(19|20)\d\d-(0[1-9]|1[012])$/;

  // @expose test1
  // @expose test2
  var test;
})();


// @expose test1
/**
 * JavaScript edge cases: undefined
 * @examples
 *
 * // foobar is never defined
 *
 * if(foobar)done() // throws
 * typeof foobar    // "undefined"
 * {wrap: foobar}   // {wrap: void 0}
 *
 */

 // @expose test2