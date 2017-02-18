var gulp = require('gulp');
var sass = require('gulp-sass');




gulp.task('styles', function() {
   gulp.src('app/vendor/sass/**/*.scss')
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest('./app/vendor/css/'))
});

//Watch task
gulp.task('default', function() {
  gulp.watch('app/vendor/sass/**/*.scss',['styles']);
});