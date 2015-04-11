# [gulp](http://gulpjs.com)-atcss [![Build Status](https://travis-ci.org/morishitter/gulp-atcss.svg)](https://travis-ci.org/morishitter/gulp-atcss)

> [AtCSS](https://github.com/morishitter/atcss) - Annotations based CSS processor


## Install

```sh
$ npm install --save-dev gulp-atcss
```

## Usage

```js
var gulp = require('gulp');
var atcss = require('gulp-atcss');

gulp.task('default', function () {
  return gulp.src('src/app.css')
    .pipe(atcss())
    .pipe(gulp.dest('dist'));
});
```

## License

The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
