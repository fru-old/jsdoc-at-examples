@Examples
=========

Use the @examples JSDoc tag to write small and wonderfully concise tests in comments, just above your code. Simple examples are worth a thousand words so here goes:

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

The best part is, now you can actually test that these examples hold true. This is especially great with Regular Expressions:

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

FAQ
---

**This looks a lot like [autodoc](https://github.com/dtao/autodoc). Why not just use autodoc or fork it?**

I really like the idea of autodoc, but didn't like that tests run in the documentation. Also in my opinion the goal to be a full blown JSDoc suit adds a lot of unnecessary weight and clutter. So this project treats @examples tests like real tests and a seperate JSDoc parser can be used to generate the documentation. 


