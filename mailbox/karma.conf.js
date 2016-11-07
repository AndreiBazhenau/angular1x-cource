module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app/**/*.module.js',
            'app/**/*.js',
            'app/**/*.html'
        ],
        files: [
            'app/**/*.unit.spec.js'
        ],
        exclude: [
        ],
        preprocessors: {
            'app/**/*.html': ['ng-html2js'],
        },
        ngHtml2JsPreprocessor: {
            stripPrefix: 'app/',
            // create a single module that contains templates from all the files
            moduleName: 'templates'
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    })
};
