'use strict';

var gulp = require('gulp');
var gulpIf = require('gulp-if');
var gulpRev = require('gulp-rev');
var gulpRevCollector = require('gulp-rev-collector');
var gulpRevReplace = require('gulp-rev-replace');
var gulpUglify = require('gulp-uglify');
var gulpUniqueFiles = require('gulp-unique-files');
var gulpUseRef = require('gulp-useref');
var gulpCleanCSS = require('gulp-clean-css');
var gulpResponsive = require('gulp-responsive');
var gulpCheerio = require('gulp-cheerio');
var del = require('del');
var rename = require('rename');

gulp.task('useref', [], function() {
  var assets = gulpUseRef.assets({
    searchPath: 'public'
  });

  return gulp.src('public/**/*.html')
    .pipe(assets)
    .pipe(gulpUniqueFiles())
    .pipe(gulpIf('*.css', gulpCleanCSS()))
    .pipe(gulpIf('*.js', gulpUglify()))
    .pipe(gulpRev())
    .pipe(assets.restore())
    .pipe(gulpUseRef())
    .pipe(gulpRevReplace({
      prefix: '/'
    }))
    .pipe(gulp.dest('public'));
});

gulp.task('copy:assets', function () {
  return gulp.src(['assets/**/*'])
    .pipe(gulp.dest('public/assets'))
});

gulp.task('default', [
  'useref',
  'copy:assets'
]);

function replaceBackSlash(str) {
  return str.replace(/\\/g, '/');
}
