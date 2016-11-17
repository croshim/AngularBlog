
'use strict'

const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
const browserSync = require('browser-sync').create();

const dirs = {
  src: './src',
  dist: './dist'
};

const paths = {
  scripts: {
    app: [dirs.src + '/app/**/module.js', dirs.src + '/app/**/*.js'],
    angular: [
      './node_modules/angular/angular.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js'
    ]
  },
  html: dirs.src + '/app/**/*.html',
  cleanup: dirs.dist + '/**/*.*'
};

gulp.task('js-app', () => {
  return gulp.src(paths.scripts.app)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(dirs.dist));
});

gulp.task('templates', () => {
  return gulp.src(paths.html)
    .pipe(gulp.dest(dirs.dist));
});

gulp.task('js-angular', () => {
  return gulp.src(paths.scripts.angular)
    .pipe(concat('angular.js'))
    .pipe(gulp.dest(dirs.dist));
});

gulp.task('cleanup', () => {
  return del(paths.cleanup, {
    force: true
  });
});

gulp.task('build', gulp.series(
  'cleanup',
  gulp.parallel('js-app', 'js-angular', 'templates')
));

gulp.task('watch', () => {
  gulp.watch(paths.html, gulp.series('templates'));
  gulp.watch(paths.scripts.app, gulp.series('js-app'));
  gulp.watch(paths.scripts.angular, gulp.series('js-angular'));
});

gulp.task('serve', () => {
  browserSync.init({
    server: 'dist'
  });

  browserSync.watch('./dist/**/*.*').on('change', browserSync.reload);
});

gulp.task('default',
  gulp.series('build', gulp.parallel('watch', 'serve'))
);