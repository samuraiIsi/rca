(function() {

    var gulp = require('gulp'),
        uglify = require('gulp-uglify'),
        fs = require('graceful-fs'),
        htmlmin = require('gulp-htmlmin'),
        cleanCSS = require('gulp-clean-css'),
        less = require('gulp-less'),
        concat = require('gulp-concat'),
        loading = require('gulp-load-plugins')();

    gulp.task('scripts', function(){
        return gulp.src('src/**/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/src'));  
    });

    gulp.task('minify', function() {
      return gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build/src'))
    });

    gulp.task('minify-css', function() {
      return gulp.src('styles/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build/src'));
    });

    gulp.task('less', function () {
        gulp.src('src/theme/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('css/'))
    });

    gulp.task('minifyFolders', function () {
        gulp.src(['src/**/module.js', 'src/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build/src'));
    });

    gulp.task('build', function(){
        gulp.watch('src/**/*.js', ['scripts']);
        // gulp.watch('src/theme/less/main.less', ['less']);
        // gulp.watch('theme/less/components/**/*.less', ['less']);
        gulp.watch('./src/**/*.html', ['minify']);
        gulp.watch('./src/**/*.less', ['less']);
        // gulp.watch('./src/**/*.js', ['js']);
    });

    gulp.task('serve', function() {
        loading.connect.server({
            port: 8075,
            root: './'
        });
    });

    gulp.task('default', ['scripts', 'minifyFolders', 'less', 'minify', 'minify-css', 'build', 'serve']);
})();