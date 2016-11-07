module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/restangular/src/restangular.js',
            'bower_components/underscore/underscore.js',
            'test/app-config.js',
            'app/**/*.module.js',
            'app/**/*.js',
            'app/**/*.html',
            'app/**/*.unit.spec.js'
        ],
        exclude: [
            'app/**/*.e2e.spec.js'
        ],
        preprocessors: {
            'app/**/*.html': ['ng-html2js']
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
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity
    })
};
