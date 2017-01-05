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

// gulp responsive images is not working and I can't understand why

// var image = {
//   'images/originals/linda-splash.jpg': [
//       {
//       crop: false,
//       format: null,
//       gravity: 'Center',
//       height: 100,
//       overwrite: true,
//       quality: 100,
//       rename: null,
//       percentage: false,
//       sharpen: false,
//       suffix: '-100',
//       upscale: false,
//       width: 100
//     }
//   ]
// };

// A different way, also not working

// gulp.task('default', ['create-images-versions']);
//
// gulp.task('create-images-versions', () => {
//   return gulp.src('images/**/*.js')
//       .pipe(responsive({
//         '**/*.jpg': [{
//           width: 600,
//           suffix: '-600'
//         }, {
//           width: 600 * 2,
//           suffix: '-600-2x'
//         }]
//       }))
//       .pipe(gulp.dest('new_dist/'));
// });
