var gulp = require('gulp');
var handlebars = require('gulp-ember-handlebars');
var print = require('gulp-print');
var rename = require('gulp-rename');

gulp.task('default', function () {  
    return gulp.src('./js/views/**/*.handlebars')
        .pipe(print(function (name) {
            return "INPUT: " + name;
        }))
        .pipe(handlebars({
            outputType: 'browser',
            processName: function (name) {
                return name.replace("js/views/", "")
                            .replace(".handlebars", "");
            }
        }))
         .pipe(rename({ suffix: '.template' }))
         .pipe(print(function (name) {
             return "OUTPUT: " + name;
         }))      
        .pipe(gulp.dest('./js/views/'));        
});