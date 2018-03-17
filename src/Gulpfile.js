const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

gulp.task('sass', function() {
  return gulp.src('sass/style.scss')
    // Minify
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('../pub/css/'))

    // Normal compile with sourcemap
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('../pub/css/'))
});

// Watch task
gulp.task('default',function() {
  gulp.watch('sass/**/*.scss',['sass']);
});
