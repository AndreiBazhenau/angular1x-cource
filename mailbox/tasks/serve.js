'use strict';

const browserSync = require('browser-sync').create();

module.exports = function(options) {

    return function() {

        browserSync.init({
            server: options.src
        });

        browserSync.watch([`${options.src}/**/*.*`, `!${options.src}/**/*.spec.js`]).on('change', browserSync.reload);
    };

};
