var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();


//this uses the gulp-watch plugin
gulp.task('watch', function() {

    browserSync.init({
        server: {
            baseDir: "./modules_notes"
        }
    });

   

    watch('./modules_notes/*', function() {
        browserSync.reload();

    });

    

});



