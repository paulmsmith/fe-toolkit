'use strict'

const gulp = require('gulp')
const config = require('./config.json')
const runSequence = require('run-sequence')
const browserSync       = require('browser-sync').create();
const reload            = browserSync.reload;

gulp.task('watch-assets', function () {
  return gulp.watch([
    config.paths.assets + 'images/**',
    config.paths.assets + 'javascripts/**'
  ], {cwd: './'}, ['copy-assets'])
})

gulp.task('watchCSS', function() {
  return gulp.watch([
    config.paths.assets + 'sass/**',
    config.paths.fractal.sass + '/**/*'
  ], {cwd: './'}, ['css'])
});

gulp.task('watchJS', function() {
  return gulp.watch([
    config.paths.assets + 'javascripts/**/*.js',
    config.paths.fractal.components + '/**/*.js'
  ], {cwd: './'}, ['scripts'])
});