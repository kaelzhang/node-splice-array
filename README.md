[![Build Status](https://travis-ci.org/kaelzhang/node-splice-array.svg?branch=master)](https://travis-ci.org/kaelzhang/node-splice-array)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/node-splice-array?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/node-splice-array)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/splice-array.svg)](http://badge.fury.io/js/splice-array)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/splice-array.svg)](https://www.npmjs.org/package/splice-array)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/node-splice-array.svg)](https://david-dm.org/kaelzhang/node-splice-array)
-->

# splice-array

Splice an array synchronously or asynchronously

## Install

```sh
$ npm install splice-array --save
```

## Usage

```js
const splice = require('splice-array')
const array = [1, 2, 3]

splice(array, (x, i) => i % 2 === 1)  // returns [2]
console.log(array)                    // [2]

const array2 = [1, 2, 3]
splice.p(array2, (x, i) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(i % 2 === 1)
    }, 100)
  })
})
.then(result => {
  console.log(result === array2)    // true
  console.log(result)               // [2]
})
```

## splice(array, remover, thisArg)

Returns the modified `array`

## splice.p(array, remover, thisArg)

Returns `Promise`

## License

MIT
