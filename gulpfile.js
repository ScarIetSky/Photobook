"use strict";

let gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass');


gulp.task('connect', function() {
    connect.server({
        root: '',
        livereload: true
    });
});

// gulp.task('css', function() {
//     gulp.src('css/*.css')
//         .pipe(autoprefixer('last 15 versions'))
//         .pipe(connect.reload());
// });

gulp.task('sass', function () {
    gulp.src('./dev/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(connect.reload());
});


gulp.task('watch', function() {
    gulp.watch('./dev/sass/*.{sass,scss}', ['sass']);
    gulp.watch('*.html', ['html'])
});

gulp.task('default', ['connect',  'watch']);