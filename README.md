# Utility OpenType

Immutable, advanced typographic feature utilities that fallback gracefully with CSS alone. Less than 1.5kb gzipped. Works great on its own, or alongside [Basscss](http://basscss.com).

Apply OpenType as easily as you apply bold or italics, with simple, <abbr class="caps">CSS</abbr>-only utility classes.

Three challenges you’ll avoid when using <em>Utility OpenType</em>:

1. <strong>OpenType features should be as to apply as bold and italics.</strong> <em>Utility OpenType</em> provides concise, declarative classes that you can easily apply to entire elements, or specifically scope to inline spans when you are working on fine typographic details like discretionary ligatures. They are intended to be immutable and don’t interfere or concern themselves with any other part of your <abbr class="caps">CSS</abbr>.
2. <strong>OpenType features should cascade predictably.</strong> The `font-feature-settings` property is often used to apply these advanced typographic features, because it has significantly better browser support than its lower-level, `font-variant-*` counterpart. Unfortunately, it doesn’t always carry down one feature to the next; imagine only being able to use the `margin` or `font` property in <abbr class="caps">CSS</abbr>, but not `margin-left` or `font-size` and you’ll begin to see the maintainability problems this can cause. You can read more about this problem in my article on <a href="http://kennethormandy.com/journal/normalize-opentype-css">normalizing OpenType feature defaults</a>, and on <a href="#">Typekit Practice</a>—or, skip both: Utility OpenType mitigates this problem through <abbr class="caps">CSS’</abbr> <code>@supports</code> feature queries.
3. <strong>OpenType features should fallback gracefully.</strong> Provide a better experience for Chrome, Firefox, and Internet Explorer 10+ (yes, seriously) without negatively impacting the rest: <a href="#c2sc">Small Caps</a> are progressively enhanced from `text-transform: uppercase`, and <a href="#sinf">Scientific Inferiors</a> maintain the browser default `<sub>` styling so your H₂O <!-- This is for the README version --> never says H2O.

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2015 [Kenneth Ormandy](http://kennethormandy.com)
