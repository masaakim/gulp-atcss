var gutil = require('gulp-util');
var through = require('through2');
var Atcss = require('atcss');

module.exports = function (options) {
    options = options || {};

    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            cb(new gutil.PluginError('gulp-atcss', 'Streaming not supported'));
            return;
        }

        try {
            var atcss = new Atcss(file.contents.toString());
            file.contents = new Buffer(atcss.process(file.contents.toString()));
            this.push(file);
        } catch (err) {
            this.emit('error', new gutil.PluginError('gulp-atcss', err, {fileName: file.path}));
        }

        cb();
    });
};
