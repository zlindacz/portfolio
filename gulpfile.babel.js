'use strict';

import gulp from 'gulp';
import responsive from 'gulp-responsive';

gulp.task('default', () => {
  return gulp.src('assets/images/*.{png,jpg}')
    .pipe(responsive({
      // produce multiple images from one source
      '**/*.jpg': [{
        width: 300,
        quality: 80,
        rename: {suffix: '-small'}
      }, {
        width: 600,
        quality: 80,
        rename: {suffix: '-medium'}
      }, {
        width: 1200,
        quality: 50,
        rename: {suffix: '-large'}
      }],
      '**/*.png': [{
        width: 500
      },{
        width: 500 * 2,
        rename: {suffix: '-large'}
      }]
    }))
    .pipe(gulp.dest('dist'));
});
