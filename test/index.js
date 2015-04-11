var fs = require('fs');
var assert = require('assert');
var gutil = require('gulp-util');
var Atcss = require('atcss');
var gulpAtcss = require('../');

it('should process CSS using AtCSS', function (cb) {
    var stream = gulpAtcss();
    var atcssFile = fs.readFileSync('test/fixtures/atcss.css', 'utf-8');
    var atcss = new Atcss(atcssFile);
    var output = atcss.process(atcssFile);

    stream.on('data', function (file) {
        assert.equal(file.contents.toString(), output);
        cb();
    });

    stream.write(new gutil.File({
        //path: __dirname + '/fixture.css',
        contents: new Buffer(atcssFile)
    }));
});
