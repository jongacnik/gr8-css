# gr8

Functional css layout utilities. Drop `gr8.css` into your project and begin assigning classes.

**Documentation coming, eventually...**

s/o [gravitons](https://github.com/jxnblk/gravitons), [Basscss](http://basscss.com) and [f(css)](http://www.jon.gold/2015/07/functional-css/).

## Utilities

gr8 is split into multiple files that contain specific layout utilities.

File | Contains
--- | ---
[_c.scss](https://github.com/amongiants/gr8/blob/sass/source/c.scss) | column
[_co.scss](https://github.com/amongiants/gr8/blob/sass/source/co.scss) | column offsets
[_p.scss](https://github.com/amongiants/gr8/blob/sass/source/p.scss) | padding
[_m.scss](https://github.com/amongiants/gr8/blob/sass/source/m.scss) | margin
[_x.scss](https://github.com/amongiants/gr8/blob/sass/source/x.scss) | flexbox
[_d.scss](https://github.com/amongiants/gr8/blob/sass/source/d.scss) | display
[_ps.scss](https://github.com/amongiants/gr8/blob/sass/source/ps.scss) | positioning
[_f.scss](https://github.com/amongiants/gr8/blob/sass/source/f.scss) | float
[_h.scss](https://github.com/amongiants/gr8/blob/sass/source/h.scss) | header
[_ta.scss](https://github.com/amongiants/gr8/blob/sass/source/ta.scss) | text-align
[_bg.scss](https://github.com/amongiants/gr8/blob/sass/source/bg.scss) | background
[_z.scss](https://github.com/amongiants/gr8/blob/sass/source/z.scss) | z-index
[_etc.scss](https://github.com/amongiants/gr8/blob/sass/source/etc.scss) | various
[_dev.scss](https://github.com/amongiants/gr8/blob/sass/source/dev.scss) | dev helpers
[main.scss](https://github.com/amongiants/gr8/blob/sass/source/main.scss) | options

## Custom Build

gr8 is super flexible and you'll probably want to make use of customizing defaults.

```
npm install
npm run dist
```

Breakpoints, whitespace, font size, reponsive classes and nested columns can be changed in `source/main.scss`. Breakpoints, whitespace, and font size are compiled using each loops — add/remove values from the arrays and correct number of corresponding classes will be generated.

Turning off nested columns and nested column offsets DRASTICALLY decrease the size of gr8.
