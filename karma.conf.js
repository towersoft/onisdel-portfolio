//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: './app',

        files: [
            'lib/angular/angular.js',
            'lib/angular-route/angular-route.js',
            'lib/angular-mocks/angular-mocks.js',
            'js/**/*.js'
        ],
        exclude: [
            'js/test/ser*.js'
        ],
        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
