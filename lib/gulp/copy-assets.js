'use strict'

const gulp = require('gulp')
const config = require('./config.json')
const runSequence = require('run-sequence')

gulp.task('copy:govuk-assets', function(){
  return gulp.src([
    'govuk_modules/govuk_template/assets/**',
  ])
  .pipe(gulp.dest(config.paths.public))
})

gulp.task('copy:fractal-assets', function(){
  return gulp.src([
    config.paths.assets + '/**',
  ])
  .pipe(gulp.dest(config.paths.public))
})

gulp.task('copy:govuk-toolkit-images', function(){
  return gulp.src([
    'govuk_modules/govuk_frontend_toolkit/images/**'
  ])
  .pipe(gulp.dest(config.paths.public + '/images'))
})

gulp.task('copy:govuk-jinja-layout', function(){
  return gulp.src([
    'govuk_modules/govuk_template_jinja/views/layouts/**'
  ])
  .pipe(gulp.dest(config.paths.lib))
})

gulp.task('copy:assets', function (done) {
  runSequence(
    'copy:govuk-assets',
    'copy:govuk-jinja-layout',
    'copy:govuk-toolkit-images',
    'copy:fractal-assets',
    done
  )
})
