var gutil = require('gulp-util');
var through = require('through2');
var acss = require('acss');

module.exports = function (options) {
    options = options || {};

    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            cb(new gutil.PluginError('gulp-acss', 'Streaming not supported'));
            return;
        }

        try {
            file.contents = new Buffer(acss(file.contents.toString(), options));
            this.push(file);
        } catch (err) {
            this.emit('error', new gutil.PluginError('gulp-acss', err, {fileName: file.path}));
        }

        cb();
    });
};
