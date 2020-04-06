var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: ['app', 'assets', 'data', 'node_modules'],
    livereload: true
  });
});

gulp.task('default', ['connect']);