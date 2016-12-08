'use strict'

const gulp = require('gulp')
const config = require('./config.json')
const runSequence = require('run-sequence')

gulp.task('copy:govuk-modules', function (done) {
  runSequence(
    'copy:toolkit',
    'copy:template-assets',
    'copy:elements-sass',
    'copy:template',
    done
  )
})

gulp.task('generate-assets', function(done){
  runSequence(
    'clean',
    'copy:govuk-modules',
    'css',
		'scripts',
    'copy:assets',
    done
  )
})

gulp.task('watch', function(done){
  runSequence(
    'watch-assets',
    'watchCSS',
    'watchJS',
    done
  )
})

gulp.task('fractal:server', function(done){
  runSequence(
    'generate-assets',
    'frctlstart',
    done
  )
})

gulp.task('dev', function(done) {
  runSequence(
    'generate-assets',
    'frctlstart:development',
    'watch'
  )
})

gulp.task('build', function(done) {
  runSequence(
    'generate-assets',
    'frctlbuild'
  )
})

gulp.task('default', function(done) {
  runSequence(
    'dev'
  )
})
