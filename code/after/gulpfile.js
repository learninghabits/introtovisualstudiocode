var gulp = require('gulp');
var handlebars = require('gulp-ember-handlebars');
var print = require('gulp-print');
var rename = require('gulp-rename');
var clean = require("gulp-clean");

var jsSourceFiles = './js/app/**/*.js';
var minifiedJsFiles = './js/app/**/*.min.js';
var handlebarFiles = './js/app/views/**/*.handlebars';
var emberTemplates =  './js/app/views/**/*.template.js';
var templatesDestination = './js/app/views/';


gulp.task('clean', function(){
    return gulp.src([minifiedJsFiles, emberTemplates], {read: false})    
               .pipe(print(function (name) {
                   return "CLEANED FILE: " + name;
                }))
                .pipe(clean());
});

gulp.task('default', ['clean'], function () {  
    return gulp.src(handlebarFiles)
        .pipe(print(function (name) {
            return "INPUT: " + name;
        }))
        .pipe(handlebars({
            outputType: 'browser',
            processName: function (name) {
                return name.replace("js/app/views/", "")
                            .replace(".handlebars", "");
            }
        }))
         .pipe(rename({ suffix: '.template' }))
         .pipe(print(function (name) {
             return "OUTPUT: " + name;
         }))      
        .pipe(gulp.dest(templatesDestination));        
});