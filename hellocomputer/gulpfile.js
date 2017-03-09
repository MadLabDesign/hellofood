var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');




gulp.task('styles', function() {
   gulp.src('app/src/sass/**/*.scss')
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest('./app/dist/css/'))
});


gulp.task('images', function() {
   gulp.src('app/src/img/*')
       .pipe(imagemin())
       .pipe(gulp.dest('./app/dist/img'))
});


//Watch task
gulp.task('default', function() {
  gulp.watch('app/src/sass/**/*.scss',['styles']);
  gulp.watch('app/src/img/*',['images']);
});