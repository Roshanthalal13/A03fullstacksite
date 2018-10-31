
QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing a  function with several sets of inputs', function (assert) {
    assert.equal(numberInput(5), 5, 'Tested with two relatively small positive numbers');
    assert.equal(numberInput(0), 0, 'Tested with two relatively small positive numbers');

});

