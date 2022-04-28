// Based on Basscss’ build script, MIT via https://github.com/basscss/basscss/blob/02a401370a2696907021a5367685cdaaaf42236d/scripts/css.js
var fs = require('fs')
var path = require('path')
var postcss = require('postcss')
var cssnext = require('cssnext')
var cssstats = require('cssstats')
var reporter = require('postcss-reporter')
var nested = require('postcss-nested')
var filesize = require('filesize')
var Cleancss = require('clean-css')
var autoprefixer = require('autoprefixer')
var packer = require('css-mqpacker')
var mover = require('postcss-move-media')
var pkg = require('../package.json')


var removeComments = postcss.plugin('remove-comments', function(opts) {
  opts = opts || {}
  return function(root) {
    root.eachComment(function(comment) {
      comment.removeSelf()
    })
  }
})

compile = function() {
  var dir = path.join(__dirname, '../')
  var dest = path.join(__dirname, '../css/')

  var src = fs.readFileSync(dir + 'index.css', 'utf8')

  var result =
    postcss()
    .use(cssstats())
    .use(autoprefixer())
    .use(nested())
    .use(packer())
    .use(mover())
    .use(reporter())
    .process(src)

  var css = result.css
  var minified = new Cleancss({
      advanced: true,
    }).minify(css).styles

  var stats = result.messages.filter(function (message) {
    return message.stats
  })
  .map(function (message) {
    return message.stats
  })[0]

  console.log('Size: ' + filesize(stats.size))
  console.log('Gzipped: ' + filesize(stats.gzipSize))
  console.log('Rules: ' + stats.rules.total)
  console.log('Selectors: ' + stats.selectors.total)
  console.log('Declarations: ' + stats.declarations.total)

  css =
    [
      '/*',
      '',
      '    Utility OpenType v' + pkg.version,
      '    ' + pkg.description,
      '    ' + pkg.homepage,
      '',
      '*/',
      '',
      '',
      css
    ].join('\n')

  fs.writeFileSync(dest + pkg.name + '.css', css)
  fs.writeFileSync(dest + pkg.name + '.min.css', minified)
  console.log('Compiled to css/' + pkg.name + '.css and css/' + pkg.name + '.min.css')

}

compile()
