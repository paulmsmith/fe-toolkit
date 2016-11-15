var gulp = require('gulp')
var gutil = require('gulp-util')
var runSequence = require('run-sequence')

gulp.task('copy-govuk-modules',
  gulp.series([
    'copy-toolkit',
    'copy-template-assets',
    'copy-elements-sass',
    'copy-template'
  ])
)

gulp.task('copy-assets',
  function () {
    return gulp.src([
      '!' + config.paths.assets + 'sass{,/**/*}',
      config.paths.assets + '/**'
    ])
    .pipe(gulp.dest(config.paths.public))
  }
)

gulp.task('generate-assets', 
  gulp.series(
    'clean',
    'copy-govuk-modules',
    'sass',
    'copy-assets',
    done
  )
)

gulp.task('watch',
  gulp.series(
    'watchCSS',
    'watchJS'
    done
  )
)

gulp.task('dev', 
  gulp.parallel(
    'frctlStart',
    'generate-assets',
    'watch'
));

gulp.task('default',
  gulp.parallel(
    'frctlStart',
    'generate-assets',
    'watch',
    done
  )
)