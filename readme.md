# gr8

Functional css layout utilities. Drop `gr8.css` into your project and begin assigning classes.

**Documentation coming, eventually...**

Initially a fork of [gravitons](https://github.com/jxnblk/gravitons). Also s/o [Basscss](http://basscss.com) and  [f(css)](http://www.jon.gold/2015/07/functional-css/).

## Utilities

gr8 is split into multiple files that contain specific layout utilities.

File | Contains
--- | ---
[c.css](https://github.com/amongiants/gr8/blob/master/source/c.css) | column
[co.css](https://github.com/amongiants/gr8/blob/master/source/co.css) | column offsets
[cn.css](https://github.com/amongiants/gr8/blob/master/source/cn.css) | nested column
[con.css](https://github.com/amongiants/gr8/blob/master/source/con.css) | nested column offsets
[p.css](https://github.com/amongiants/gr8/blob/master/source/p.css) | padding
[m.css](https://github.com/amongiants/gr8/blob/master/source/m.css) | margin
[x.css](https://github.com/amongiants/gr8/blob/master/source/x.css) | flexbox
[d.css](https://github.com/amongiants/gr8/blob/master/source/d.css) | display
[ps.css](https://github.com/amongiants/gr8/blob/master/source/ps.css) | positioning
[f.css](https://github.com/amongiants/gr8/blob/master/source/f.css) | float
[h.css](https://github.com/amongiants/gr8/blob/master/source/h.css) | header
[ta.css](https://github.com/amongiants/gr8/blob/master/source/ta.css) | text-align
[bg.css](https://github.com/amongiants/gr8/blob/master/source/bg.css) | background
[z.css](https://github.com/amongiants/gr8/blob/master/source/z.css) | z-index
[etc.css](https://github.com/amongiants/gr8/blob/master/source/etc.css) | various
[main.css](https://github.com/amongiants/gr8/blob/master/source/main.css) | options

Default spacing / font size options can be changed in `source/main.css`. Build using script `npm run build` (uses [cssnext](http://cssnext.io)).

To DRASTICALLY decrease the size of gr8 you can disable nested columns and column offsets.
