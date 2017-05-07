var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc =  require('sassdoc');


var input = 'app/src/sass/**/*.scss';
var output = './app/dist/css/';

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};


gulp.task('sass', function(){
    return gulp
        .src(input)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write('./app/dist/css/maps'))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(output));


});

var sassdocOptions = {
    dest: './app/dist/css/sassdoc'
};

gulp.task('sassdoc', function(){
    return gulp
        .src(input)
        .pipe(sassdoc(sassdocOptions))
        .resume();
});


//Watch Task

gulp.task('watch', function(){
    return gulp
        .watch(input, ['sass'])
        .on('change', function(event) {
            console.log('File ' + event.path + 'was ' + event.type + ', running tasks...');
        });
});


gulp.task('default', ['sass', 'watch']);

gulp.task('prod', ['sassdoc'], function() {
    return gulp
        .src(input)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(output));
});














