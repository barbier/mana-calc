var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  concat = require('gulp-concat'),
  connect = require('gulp-connect'),
  csso = require('gulp-csso');

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('styles', function () {
  gulp.src([
      './bower_components/pure/pure.css',
      './style/stylus/main.styl'
    ])
    .pipe(stylus({
      "include css": true
    }))
    .pipe(concat('main.css'))
    .pipe(csso())
    .pipe(gulp.dest('./style/css'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('style/**/*.styl', ['styles']);
  gulp.watch('./*.html', ['html']);
});

gulp.task('connect', function () {
  connect.server({
    livereload: true
  });
});

gulp.task('default', ['styles', 'watch', 'connect']);
