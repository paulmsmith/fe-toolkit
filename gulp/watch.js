'use strict';

const gulp = require('gulp')
const config = require('./config.json')

// -----------------------------------------------------------------------------
// watch tasks
// -----------------------------------------------------------------------------

gulp.task('watchCSS', function(done) {
  gulp.watch(
    [config.paths.assets + '/scss/**/*.scss'],
    gulp.series('css')
  ).on('change', reload);
  done();
});

gulp.task('watchJS', function(done) {
  gulp.watch(
    [config.paths.fractal.components + '/**/*.js'],
    gulp.series('scripts'))
    .on('change', reload);
  done();
});