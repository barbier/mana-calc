const autoprefixer = require('autoprefixer-stylus'),
      babel = require('gulp-babel');
      concat = require('gulp-concat'),
      connect = require('gulp-connect'),
      gulp = require('gulp'),
      stylus = require('gulp-stylus'),
      uglify = require('gulp-uglify'),

gulp.task('html', () =>
  gulp.src('./*.html')
    .pipe(connect.reload()));

gulp.task('styles', () =>
  gulp.src('./style/stylus/main.styl')
    .pipe(stylus({
      compress: true,
      use: [autoprefixer()]
    }))
    .pipe(gulp.dest('./style/css'))
    .pipe(connect.reload()));

gulp.task('scripts', () =>
  gulp.src('./script/app.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./script')));

gulp.task('watch', () => {
  gulp.watch('style/**/*.styl', ['styles']);
  gulp.watch('./*.html', ['html'])
  gulp.watch('script/app.js', ['scripts']);
});

gulp.task('connect', () =>
  connect.server({
    livereload: true,
    port: 8888
  }));

gulp.task('default', ['styles', 'scripts', 'watch', 'connect']);
