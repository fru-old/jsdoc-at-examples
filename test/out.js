QUnit.module('', {});
QUnit.test('isInteger(5) // true', function (assert) {
    assert.deepEqual(eval('isInteger(5)'), eval('true'));
});
QUnit.test('isInteger(5.0) // true', function (assert) {
    assert.deepEqual(eval('isInteger(5.0)'), eval('true'));
});
QUnit.test('isInteger(-5) // true', function (assert) {
    assert.deepEqual(eval('isInteger(-5)'), eval('true'));
});
QUnit.test('isInteger(3.14) // false', function (assert) {
    assert.deepEqual(eval('isInteger(3.14)'), eval('false'));
});
QUnit.test('isInteger(\'foo\') // false', function (assert) {
    assert.deepEqual(eval('isInteger(\'foo\')'), eval('false'));
});
QUnit.test('isInteger(NaN) // false', function (assert) {
    assert.deepEqual(eval('isInteger(NaN)'), eval('false'));
});