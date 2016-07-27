var gulp = require('gulp'),
    nodemon = require('nodemon'),
    watch = require('gulp-watch');
gulp.task('stream', function () {
    // Endless stream mode
    return watch('scss/**/*.scss', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});

gulp.task('compile:app', function(){
    return gulp.src('src/**/*.ts')
        .pipe(/*npm run tsc*/)
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('default', function (defaultTasks) {
    nodemon({
        script: 'server.js'
    });
    gulp.start();
});

