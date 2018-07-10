var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');


// конкатинация js файлов проекта + минификация
gulp.task('js', function () {
    gulp.src(['dist/**/*.js'])
        .pipe(concat('js/app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./compile/'));
});

//копирование папки с библиотеками
gulp.task('js-lib', function () {
    gulp.src(['node_modules/**/*'])
        .pipe(gulp.dest('./compile/node_modules'));
});

//конкатинация шаблонов + минификация
gulp.task('tpl', function () {
    gulp.src(['dist/**/*.html'])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./compile'));
});


// конкатинация css + минификация
gulp.task('css', function () {
    
    gulp.src(['dist/css/**/*.css'])
        .pipe(concatCss("css/style.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./compile/'));
});