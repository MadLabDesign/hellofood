var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
   gulp.src('app/src/sass/**/*.scss')
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest('./app/dist/css/'))
});


//Watch task
gulp.task('default', function() {
  gulp.watch('app/src/sass/**/*.scss',['styles']);
});