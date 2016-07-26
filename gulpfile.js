var gulp = require('gulp'),
nodemon = require('nodemon');

gulp.task('default', function (defaultTasks) {
    nodemon({
        script: 'server.js'
    });
    gulp.start();
});

