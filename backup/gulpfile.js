var gulp = require('gulp');
var responsive = require('gulp-responsive-images');

gulp.task('default', function () {
  gulp.src('images/*')
  .pipe(responsive({
      '*.jpg': [{
        width: 600,
        suffix: '-600'
      }, {
        width: 600 * 2,
        suffix: '-600-2x'
      }],
      '*.png': [
        {
          width: 100,
          suffix: '-100'
        },{
          width: 100 * 2,
          suffix: '-100-2x'
        }
      ]
    }))
    .pipe(gulp.dest('new_dist/test'));
});
