[![](http://utility-opentype.kennethormandy.com/media/og-image.gif)](http://utility-opentype.kennethormandy.com)

***

# Utility OpenType

Simple, CSS utility classes for advanced typographic features. Falls back gracefully through feature queries. Less than 1.75kB gzipped. [—@kennethormandy](https://twitter.com/kennethormandy)

[Utility OpenType](http://utility-opentype.kennethormandy.com) helps you make the most of the font that you are loading in, reducing convoluted <abbr class="caps"><span class="caps">CSS</span></abbr> into four-letter, typographic utility classes, because:

1.  OpenType features should be as **easy to apply** as bold and italics.
2.  OpenType features should **cascade predictably**.
3.  OpenType features should **fallback gracefully**.

This is described in more detail in the [design decisions](http://utility-opentype.kennethormandy.com/#design-decisions). The following examples are supported on Chrome, Firefox, and Internet Explorer 10+ and fallback as gracefully [elsewhere](http://utility-opentype.kennethormandy.com/#browser-support). Works on its own, or alongside frameworks like [Basscss](http://basscss.com).

## Get started

Utility OpenType is ready to use with Sass, PostCSS, or vanilla CSS. If you’re using Sass or PostCSS, install it through npm:

```sh
npm install --save utility-opentype
```

Then, include it within your source files:

```scss
@import "utility-opentype";
```

If you’re using Sass without [Eyeglass](https://github.com/sass-eyeglass/eyeglass) modules, you will need to include the actual path to the file in the `node_modules` directory, for example:

```scss
@import "../node_modules/utility-opentype/index";
```

If you’d like to use the css directly, download the latest version of the compiled file, or reference the hosted CDN version in your HTML:

```html
<link href="http://utility-opentype.kennethormandy.com/css/index.css" rel="stylesheet">
```

That’s it! You’re ready to use the classes within your markup.

## Classes

[Read the full docs with examples.](http://utility-opentype.kennethormandy.com)

- [`.liga`](http://utility-opentype.kennethormandy.com/#liga) – Common Ligatures
- [`.dlig`](http://utility-opentype.kennethormandy.com/#dlig) – Discretionary Ligatures
- [`.smcp`](http://utility-opentype.kennethormandy.com/#smcp) – Proper Small Caps
- [`.c2sc`](http://utility-opentype.kennethormandy.com/#c2sc) – Caps to Small Caps
- [`.caps`](http://utility-opentype.kennethormandy.com/#caps) – Small Caps and Caps to Small Caps, still requires docs
- [`.case`](http://utility-opentype.kennethormandy.com/#case) – Case Sensitive Forms
- [`.titl`](http://utility-opentype.kennethormandy.com/#titl) - Titling alternates
- [`.calt`](http://utility-opentype.kennethormandy.com/#calt) – Contextual alternates
- [`.hist`](http://utility-opentype.kennethormandy.com/#hist) – Historical forms
- [`.swsh`](http://utility-opentype.kennethormandy.com/#swsh) – Swashes, 1–3, still requires docs
- [`.salt`](http://utility-opentype.kennethormandy.com/#salt) – Stylistic Alternates, 1–3, still requires docs
- [`.ss01`](http://utility-opentype.kennethormandy.com/#ss01) – Stylistic Sets, 1–20, still requires docs
- [`.frac`](http://utility-opentype.kennethormandy.com/#frac) – Diagonal Fractions
- [`.afrc`](http://utility-opentype.kennethormandy.com/#afrc) – Alternate Fractions, still requires docs
- [`.ordn`](http://utility-opentype.kennethormandy.com/#ordn) – Ordinals
- [`.sups`](http://utility-opentype.kennethormandy.com/#sups) – Superscripts
- [`.subs`](http://utility-opentype.kennethormandy.com/#subs) – Subscripts
- [`.sinf`](http://utility-opentype.kennethormandy.com/#sinf) – Scientific Inferiors
- [`.lnum`](http://utility-opentype.kennethormandy.com/#lnum) – Lining numbers
- [`.onum`](http://utility-opentype.kennethormandy.com/#onum) – Oldstyle numbers
- [`.pnum`](http://utility-opentype.kennethormandy.com/#pnum) – Proportinal numbers
- [`.tnum`](http://utility-opentype.kennethormandy.com/#tnum) – Tabular numbers
- [`.zero`](http://utility-opentype.kennethormandy.com/#zero) – Slashes Zero, still requires docs

## Running locally

```sh
git clone https://github.com/kennethormandy/utility-opentype
cd utility-opentype

# Install development dependencies
npm install

# Run the test basic PostCSS tests
npm test
```

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2015 [Kenneth Ormandy](http://kennethormandy.com)
