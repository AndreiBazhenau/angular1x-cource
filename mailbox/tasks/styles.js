'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const minifyCSS = require('gulp-minify-css');
const combine = require('stream-combiner2').obj;

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test';

module.exports = function(options) {

    return function() {
        return combine(
            gulp.src(options.src),
            $.if(isDevelopment, $.sourcemaps.init()),
            $.concat('app.css'),
            $.if(isDevelopment, $.sourcemaps.write()),
            $.if(!isDevelopment, minifyCSS()),
            gulp.dest('public')
        ).on('error', $.notify.onError());
    };

};