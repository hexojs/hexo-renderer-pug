# hexo-renderer-pug

[![CI](https://github.com/hexojs/hexo-renderer-pug/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/hexojs/hexo-renderer-pug/actions/workflows/ci.yml)
[![NPM version](https://badge.fury.io/js/hexo-renderer-pug.svg)](https://www.npmjs.com/package/hexo-renderer-pug)
[![Coverage Status](https://coveralls.io/repos/github/hexojs/hexo-renderer-pug/badge.svg)](https://coveralls.io/github/hexojs/hexo-renderer-pug)

Add support for [Pug].

## Install

```bash
$ npm install hexo-renderer-pug --save
```

## Config

PugJS [options](https://pugjs.org/api/reference.html#options) are supported. These are the options passed into [compile()](https://pugjs.org/api/reference.html#pugcompilesource-options).

Create a `pug.config.js` in your project root:

```js
module.exports = {
  compile: {  // Passed to compile().
    basedir: process.cwd(),
    // ...Other options.
  }
  // No other methods are supported for now.
}
```

[Pug]: http://pugjs.org/
