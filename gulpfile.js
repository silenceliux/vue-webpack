var gulp = require('gulp');
var webpack = require('gulp-webpack');
var named = require('vinyl-named');
var webpackConfig = require("./webpack.config.js");
gulp.task('default', function() {
    return gulp.src(['src/app.js', 'test/test.js'])
        .pipe(named())
        .pipe(webpack(webpackConfig))

        .pipe(gulp.dest('dist/'));
});