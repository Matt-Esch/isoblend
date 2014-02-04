# isoblend

## PDF Blend modes as defined by the Adobe® Supplement to the ISO 32000/-1

[![build status][1]][2] [![dependency status][3]][4] [![coverage report][9]][10] [![stability index][15]][16]

[![npm stats][13]][14]

[![browser support][5]][6]



Optimised RGBA blend functions performing blend operations based on the PDF
/ Adobe® Photoshop® blend modes. The functions are designed to work with the
pixel format of an `ImageData` object, where pixel values are stored as

    [R, G, B, A, R, G, B, A, R, G, B, A, ... ]

Each blend function takes src, dst and out array, where

  - `src` is the image on top
  - `dst` is the image underneath
  - `out` is the array in which to write the result of the operation


The following RGBA blend modes are supported

- Normal `isoblend/normal`
- Compatible `isoblend/compatible`
- Multiply `isoblend/multiply`
- Screen `isoblend/screen`
- Overlay `isoblend/overlay`
- Darken `isoblend/darken`
- Lighten `isoblend/lighten`
- ColorDodge* `isoblend/dodge`
- ColorBurn* `isoblend/burn`
- HardLight `isoblend/hardlight`
- SoftLight `isoblend/softlight`
- Difference `isoblend/difference`
- Exclusion `isoblend/exclusion`

*Based on extension level 5


[Adobe® Supplement to the ISO 32000 Base Version: 1.7 Extension Level: 3][17]

[Adobe® Supplement to ISO 32000-1 Base Version: 1.7 Extension Level: 5][18]

## Example

```js
var isoblend = require("isoblend")

var src = [0.1, 0.5, 0.7, 0.9, 0.1, 0.5, 0.7, 0.9]  // 2 pixels [RGBARGBA]
var dst = [0.5, 0.4, 0.3, 0.4, 0.9, 0.2, 0.5, 0.8]  // 2 pixels to blend over

var out = []

iso.normal(src, dst, out)

// out contains the result after blending src on top of dst using normal blend
```

## Installation

`npm install isoblend`

## Contributors

 - Matt-Esch

## MIT Licenced

  [1]: https://secure.travis-ci.org/Matt-Esch/isoblend.png
  [2]: https://travis-ci.org/Matt-Esch/isoblend
  [3]: https://david-dm.org/Matt-Esch/isoblend.png
  [4]: https://david-dm.org/Matt-Esch/isoblend
  [5]: https://ci.testling.com/Matt-Esch/isoblend.png
  [6]: https://ci.testling.com/Matt-Esch/isoblend
  [9]: https://coveralls.io/repos/Matt-Esch/isoblend/badge.png
  [10]: https://coveralls.io/r/Matt-Esch/isoblend
  [13]: https://nodei.co/npm/isoblend.png?downloads=true&stars=true
  [14]: https://nodei.co/npm/isoblend
  [15]: http://hughsk.github.io/stability-badges/dist/unstable.svg
  [16]: http://github.com/hughsk/stability-badges

  [7]: https://badge.fury.io/js/isoblend.png
  [8]: https://badge.fury.io/js/isoblend
  [11]: https://gemnasium.com/Matt-Esch/isoblend.png
  [12]: https://gemnasium.com/Matt-Esch/isoblend


  [17]: http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf
  [18]: http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/adobe_supplement_iso32000_1.pdf
