'use strict';

const gulp = require('gulp')
const config = require('./config.json')

// -----------------------------------------------------------------------------
// JavaScript Tasks
// -----------------------------------------------------------------------------

gulp.task('scripts', function() {
  return gulp.src([paths.src.components + '/**/*.js'])
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest(paths.dist.javascript));
});
