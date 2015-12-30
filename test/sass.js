var assert = require('assert')
var sass = require('node-sass')
var eyeglass = require('eyeglass')
var cssstats = require('cssstats')

var scss = '@import "utility-opentype"; body { font-family: Georgia, serif; } abbr { text-transform: uppercase; @extend .c2sc; }'
var stats
var css

describe('sass', function () {

  it('should compile source file', function (done) {
    assert.doesNotThrow(function () {
      sass.render(eyeglass({ file: 'index.css' }), function(err, result) {
        if (err) throw err
        result.css.toString()
        done()
      })
    })
  })

  it('should compile', function (done) {
    assert.doesNotThrow(function () {
      sass.render(eyeglass({ data: scss }), function(err, result) {
        if (err) throw err
        css = result.css.toString()
        done()
      })
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

})
