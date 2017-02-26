var gulp = require('gulp'),
  gutil = require('gulp-util'),
  jshint = require('gulp-jshint'),
  nodemon = require('gulp-nodemon'),
  concat = require('gulp-concat'),
  replace = require('gulp-replace-path'),
  clean = require('gulp-clean'),
  inject = require('gulp-inject'),
  uglify = require('gulp-uglify'),
  minifyCss = require('gulp-clean-css'),
  karma = require('karma').Server,
  flatten = require('gulp-flatten'),
  stripDebug = require('gulp-strip-debug'),
  path = {
    "scripts": ['./src/*.js', './src/router/*.js', './src/app/**/*.js'],
    "styles": ['./src/**/**/**/*.css'],
    "build": "./build",
    "vendor": ['./src/vendor/*.js', './bower_components/**/**/*.min.js'],
    "views": ['./src/**/**/**/*.html'],
    "data": ['./src/**/**/data/*.json'],
    "fonts": ['./src/css/fonts/*.*'],
    "image": ['./src/images/*.*']
}


gulp.task('autotest', function() {
  return gulp.watch(['www/js/**/*.js', 'test/spec/*.js'], ['test']);
});
// JS minify task
gulp.task('lint', function() {
  return gulp.src(path.scripts)
    .pipe(stripDebug())
    //.pipe(jshint())
    //.pipe(jshint.reporter('default'))
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(path.build));
});
// Images task
gulp.task('images', function() {
  gulp.src(path.image)
    .pipe(flatten())
    .pipe(gulp.dest(path.build + "/img/"));
});
// styles task
gulp.task('styles', function() {
  return gulp.src(path.styles)
    .pipe(minifyCss())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest(path.build));
});

// Html views task
gulp.task('views', function() {
  return gulp.src(path.views)
    .pipe(flatten())
    .pipe(gulp.dest(path.build + "/views/"));
});

// Json data
gulp.task('json', function() {
  return gulp.src(path.data)
    .pipe(flatten())
    .pipe(gulp.dest(path.build + "/data/"));
});

// Html to inject js and css files
gulp.task('html', ["lint", "styles", "vendor"], function() {
  var target = gulp.src('./src/index.html');

  var sources = gulp.src(['./build/app.min.css', './build/vendor.min.js', './build/app.min.js']);

  return target.pipe(inject(sources))
    .pipe(replace('/build', ''))
    .pipe(gulp.dest('./build'));
});

gulp.task('start', ["html"], function() {
  nodemon({
    script: 'server/server.js',
    ext: 'js html',
    env: {
      'NODE_ENV': 'development'
    }
  })
})

gulp.task('vendor', function() {
  return gulp.src(path.vendor)
    //.pipe(stripDebug())
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest(path.build));
});
gulp.task('fonts', function() {
  return gulp.src(path.fonts)
    .pipe(flatten())
    .pipe(gulp.dest(path.build + "/fonts/"));
});
gulp.task('default', function() {
  return gulp.src(path.build, {
    read: false
  })
    .pipe(clean());
});

gulp.task('watch', ['lint'], function() {
  // Watch our scripts
  gulp.watch(path.scripts, [
    'lint'
  ]);
  gulp.watch(path.views, [
    'views'
  ]);
});

gulp.task('default', ['html', 'views', 'json', 'images', 'fonts', 'start', 'watch']);
