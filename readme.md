# gr8

Functional css layout utilities. Drop `gr8.css` into your project and begin assigning classes.

**Documentation coming, eventually...**

s/o [gravitons](https://github.com/jxnblk/gravitons), [Basscss](http://basscss.com) and [f(css)](http://www.jon.gold/2015/07/functional-css/).

## Utilities

gr8 is split into multiple files that contain specific layout utilities.

File | Contains
--- | ---
[_c.scss](https://github.com/amongiants/gr8/blob/master/source/_c.scss) | column
[_co.scss](https://github.com/amongiants/gr8/blob/master/source/_co.scss) | column offsets
[_p.scss](https://github.com/amongiants/gr8/blob/master/source/_p.scss) | padding
[_m.scss](https://github.com/amongiants/gr8/blob/master/source/_m.scss) | margin
[_g.scss](https://github.com/amongiants/gr8/blob/master/source/_g.scss) | gutter
[_d.scss](https://github.com/amongiants/gr8/blob/master/source/_d.scss) | display
[_x.scss](https://github.com/amongiants/gr8/blob/master/source/_x.scss) | flexbox
[_f.scss](https://github.com/amongiants/gr8/blob/master/source/_f.scss) | float
[_ps.scss](https://github.com/amongiants/gr8/blob/master/source/_ps.scss) | positioning
[_z.scss](https://github.com/amongiants/gr8/blob/master/source/_z.scss) | z-index
[_h.scss](https://github.com/amongiants/gr8/blob/master/source/_h.scss) | header
[_ta.scss](https://github.com/amongiants/gr8/blob/master/source/_ta.scss) | text-align
[_bg.scss](https://github.com/amongiants/gr8/blob/master/source/_bg.scss) | background
[_etc.scss](https://github.com/amongiants/gr8/blob/master/source/_etc.scss) | various
[_dev.scss](https://github.com/amongiants/gr8/blob/master/source/_dev.scss) | dev helpers
[main.scss](https://github.com/amongiants/gr8/blob/master/source/main.scss) | options

## Custom Build

gr8 is super flexible and you'll probably want to make use of customizing defaults.

```
npm install
npm run dist
```

Breakpoints, whitespace, font size, reponsive classes and nested columns can be changed in `source/main.scss`. Breakpoints, whitespace, and font size are compiled using each loops — add/remove values from the arrays and correct number of corresponding classes will be generated.

Turning off nested columns and nested column offsets DRASTICALLY decrease the size of gr8.
