var test = require("tape")

var isoblend = require("../index")

test("compatible is a function", function (assert) {
    assert.equal(typeof isoblend.compatible, "function")
    assert.end()
})

test("darken is a function", function (assert) {
    assert.equal(typeof isoblend.darken, "function")
    assert.end()
})

test("difference is a function", function (assert) {
    assert.equal(typeof isoblend.difference, "function")
    assert.end()
})

test("dodge is a function", function (assert) {
    assert.equal(typeof isoblend.dodge, "function")
    assert.end()
})

test("exclusion is a function", function (assert) {
    assert.equal(typeof isoblend.exclusion, "function")
    assert.end()
})

test("hardlight is a function", function (assert) {
    assert.equal(typeof isoblend.hardlight, "function")
    assert.end()
})

test("lighten is a function", function (assert) {
    assert.equal(typeof isoblend.lighten, "function")
    assert.end()
})

test("multiply is a function", function (assert) {
    assert.equal(typeof isoblend.multiply, "function")
    assert.end()
})

test("normal is a function", function (assert) {
    assert.equal(typeof isoblend.normal, "function")
    assert.end()
})

test("overlay is a function", function (assert) {
    assert.equal(typeof isoblend.overlay, "function")
    assert.end()
})

test("screen is a function", function (assert) {
    assert.equal(typeof isoblend.screen, "function")
    assert.end()
})

test("softlight is a function", function (assert) {
    assert.equal(typeof isoblend.softlight, "function")
    assert.end()
})

test("functions return non-zero values", function (assert) {
    var src = [0.5, 0.4, 0.3, 0.5]
    var dst = [0.9, 0.1, 0.8, 0.6]


        var result = []
        isoblend.burn(src, dst, result)
        assert.equal(result.length, 4)
        assert.true(result[0] > 0)
        assert.true(result[1] > 0)
        assert.true(result[2] > 0)
        assert.true(result[3] > 0)
        assert.end()
})
