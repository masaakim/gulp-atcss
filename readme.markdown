# [gulp](http://gulpjs.com)-acss [![Build Status](https://travis-ci.org/morishitter/gulp-acss.svg)](https://travis-ci.org/morishitter/gulp-acss)

> [ACSS](https://github.com/morishitter/acss) - Annotations based CSS processor


## Install

```sh
$ npm install --save-dev gulp-myth
```

## Usage

```js
var gulp = require('gulp');
var myth = require('gulp-acss');

gulp.task('default', function () {
  return gulp.src('src/app.css')
    .pipe(acss())
    .pipe(gulp.dest('dist'));
});
```

## License

The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
