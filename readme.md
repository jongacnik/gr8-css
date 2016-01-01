# gr8

Functional css layout utilities. Drop `gr8.css` into your project and begin assigning classes.

**Documentation coming, eventually...**

s/o [gravitons](https://github.com/jxnblk/gravitons), [Basscss](http://basscss.com) and [f(css)](http://www.jon.gold/2015/07/functional-css/).

## Utilities

gr8 is split into multiple files that contain specific layout utilities.

File | Contains
--- | ---
[_c.scss](https://github.com/jongacnik/gr8/blob/master/source/_c.scss) | column
[_co.scss](https://github.com/jongacnik/gr8/blob/master/source/_co.scss) | column offsets
[_g.scss](https://github.com/jongacnik/gr8/blob/master/source/_g.scss) | gutter
[_p.scss](https://github.com/jongacnik/gr8/blob/master/source/_p.scss) | padding
[_m.scss](https://github.com/jongacnik/gr8/blob/master/source/_m.scss) | margin
[_d.scss](https://github.com/jongacnik/gr8/blob/master/source/_d.scss) | display
[_x.scss](https://github.com/jongacnik/gr8/blob/master/source/_x.scss) | flexbox
[_f.scss](https://github.com/jongacnik/gr8/blob/master/source/_f.scss) | float
[_ps.scss](https://github.com/jongacnik/gr8/blob/master/source/_ps.scss) | positioning
[_z.scss](https://github.com/jongacnik/gr8/blob/master/source/_z.scss) | z-index
[_h.scss](https://github.com/jongacnik/gr8/blob/master/source/_h.scss) | header
[_t.scss](https://github.com/jongacnik/gr8/blob/master/source/_t.scss) | text-align
[_bg.scss](https://github.com/jongacnik/gr8/blob/master/source/_bg.scss) | background
[_etc.scss](https://github.com/jongacnik/gr8/blob/master/source/_etc.scss) | various
[_dev.scss](https://github.com/jongacnik/gr8/blob/master/source/_dev.scss) | dev helpers
[_options.scss](https://github.com/jongacnik/gr8/blob/master/source/_options.scss) | options
[main.scss](https://github.com/jongacnik/gr8/blob/master/source/main.scss) | main

## Responsive

Custom attributes are used to define responsive values. The names of the attributes are the keys of the breakpoints set in the options.

```
  <div
    class="c2"
    xl="c3"
    lg="c4"
    md="c6"
    sm="c12"
  ></div>
```

## Custom Build

gr8 is super flexible and you'll probably want to make use of customizing defaults.

```
npm install
npm run dist
```

Breakpoints, whitespace, font size, responsive classes and nested columns can be changed in `source/_options.scss`. Breakpoints, whitespace, and font size are compiled using each loops — add/remove values from the arrays and correct number of corresponding classes will be generated.

Turning off nested columns and nested column offsets DRASTICALLY decreases the size of gr8.
