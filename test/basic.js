// MIT via https://github.com/basscss/basscss/blob/master/test/test.js

var fs = require('fs')
var path = require('path')
var assert = require('assert')
var cssnext = require('cssnext')
var cssstats = require('cssstats')
var mixed = require('css-mixed-properties')
var Cleancss = require('clean-css')

var src = fs.readFileSync(path.join(__dirname, '../index.css'), 'utf8')
var css
var stats

describe('basic', function () {

  it('should compile', function () {
    assert.doesNotThrow(function () {
      css = cssnext(src)
    })
  })

  it('should compile to string', function () {
    assert.equal(typeof css, 'string')
  })

  it('should be css', function () {
    assert.doesNotThrow(function () {
      stats = cssstats(css, { safe: false })
    })
  })

  it('should have rules', function () {
    assert(stats.rules.total > 0)
  })

  it('should have declarations', function () {
    assert(stats.declarations.total > 0)
  })

  it('should have properties', function () {
    assert(Object.keys(stats.declarations.properties).length > 0)
  })

  it('should not have a high mix of structure and skin properties', function () {
    var mix = mixed(css)
    var max = 0
    mix.warnings.forEach(function (warning) {
      if (warning.score > max) {
        max = warning.score
      }
    })
    assert(max < 5)
  })

  it('should not break perf budget', function () {
    var max = 1750
    var minified = new Cleancss({ advanced: false, }).minify(css).styles
    var minifiedStats = cssstats(minified, { safe: false })

    console.log(minifiedStats.gzipSize)
    assert(minifiedStats.gzipSize <= max)

  })

})
