exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    baseUrl: 'http://localhost:8080',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    suites: {
        home: ['app/home/**/*.e2e.spec.js'],
        login: ['app/login/**/*.e2e.spec.js'],
        main: ['app/main/**/*.e2e.spec.js'],
        all: ['app/**/*.e2e.spec.js']
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};