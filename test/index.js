var fs = require('fs');
var assert = require('assert');
var gutil = require('gulp-util');
var Acss = require('acss');
var gulpAcss = require('../');

it('should process CSS using ACSS', function (cb) {
    var stream = gulpAcss();
    var acssFile = fs.readFileSync('test/fixtures/acss.css', 'utf-8');
    var acss = new Acss(acssFile);
    var output = acss.process(acssFile);

    stream.on('data', function (file) {
        assert.equal(file.contents.toString(), output);
        cb();
    });

    stream.write(new gutil.File({
        //path: __dirname + '/fixture.css',
        contents: new Buffer(acssFile)
    }));
});
