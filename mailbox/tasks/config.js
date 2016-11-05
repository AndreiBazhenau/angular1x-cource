'use strict';

const $ = require('gulp-load-plugins')();
const gulpNgConfig = require('gulp-ng-config');
const gulp = require('gulp');
const combine = require('stream-combiner2').obj;

const environment = process.env.NODE_ENV || 'development';

module.exports = function(options) {

    return function() {
        return combine(
            gulp.src(options.src),
            gulpNgConfig('app.config', {
                environment: environment
            }),
            gulp.dest(options.dst)
        ).on('error', $.notify.onError());
    };

};
