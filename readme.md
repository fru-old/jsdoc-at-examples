@Examples
=========

Use the @examples JSDoc tag to write small tests in your code. Examples are worth a thousand words so here goes:

```javascript
/**
 * @examples
 * isInteger(5)     // true
 * isInteger(5.0)   // true
 * isInteger(-5)    // true
 * isInteger(3.14)  // false
 * isInteger('foo') // false
 * isInteger(NaN)   // false
 */
function isInteger(x) {
  return x === Math.floor(x);
}
```

For me this is wonderfully concise and the best part, now you can actually test that these examples hold true. This is really powerfull with Regular Expressions:

```javascript
(function(){

  /**
   * @expose gYearMonth
   * @examples
   * gYearMonth.test('1989-05')    // true
   * gYearMonth.test('2099-10')    // true
   * gYearMonth.test('2000-01-01') // false
   * gYearMonth.test('99-01')      // false
   * gYearMonth.test('2100-01')    // false
   */
  var gYearMonth = /^(19|20)\d\d-(0[1-9]|1[012])$/;

})();

```

The @expose JSDoc tag adds gYearMonth to the global scope. 
