"use strict";

var gulp = require('gulp'),
    concat = require('gulp-concat');


gulp.task("concatScripts", function() {
   return gulp.src([
      'js/data.js',
      'js/modernizr.js',
      'js/jquery-1.11.2.min.js',
      'js/jquery-2.2.0.min.js',
      'js/bootstrap.min.js',
      'js/modal.js',
      'js/spotify.js',
      'js/lightbox.js',
      'js/soundcloud.js',
      'js/googlemaps.js'


   ])
    .pipe(concat("app.js"))
    .pipe(gulp.dest("js"))
});


gulp.task("default", ["hello"], function(){
    console.log('The default task!');
});
