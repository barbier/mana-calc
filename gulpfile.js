var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  concat = require('gulp-concat'),
  connect = require('gulp-connect'),
  csso = require('gulp-csso'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel');

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

gulp.task('scripts', function () {
  gulp.src('./script/app.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./script'));
});

gulp.task('watch', function () {
  gulp.watch('style/**/*.styl', ['styles']);
  gulp.watch('./*.html', ['html'])
  gulp.watch('script/app.js', ['scripts']);
});

gulp.task('connect', function () {
  connect.server({
    livereload: true
  });
});

gulp.task('default', ['styles', 'scripts', 'watch', 'connect']);
