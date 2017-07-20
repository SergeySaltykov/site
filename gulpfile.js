 const gulp = require('gulp');
 
gulp.task('default', function () {
    return gulp.src(['src/**/*.js', 'src/**/*.css'], {read: false})

        .pipe(gulp.dest('tmp'));
});

/*Привет, я учусь использовать системы контроля версиями*/