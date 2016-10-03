(function() {

    var gulp = require('gulp'),
        uglify = require('gulp-uglify'),
        fs = require('graceful-fs'),
        htmlmin = require('gulp-htmlmin'),
        cleanCSS = require('gulp-clean-css'),
        less = require('gulp-less'),
        concat = require('gulp-concat'),
        rename = require('gulp-rename'),
        ngAnnotate = require('gulp-ng-annotate'),
        loading = require('gulp-load-plugins')();

    var jsFiles = 'src/**/**/**/*.js',
    htmlFiles = 'src/**/**/**/*.html',
    vendorFiles = 'vendor/**/**/*.js',
    vendorDest = 'build/',
    jsDest = 'build/src',
    htmlDst = 'build/src';

    gulp.task('scripts', function(){
        return gulp.src(jsFiles)
        .pipe(gulp.dest(jsDest)) 
        .pipe(concat('scripts.js'))
        .pipe(ngAnnotate({add: true}))
        .pipe(gulp.dest(jsDest)) 
        .pipe(uglify())
        .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest(jsDest));
        //.on('error', gutil.log);
    });

    gulp.task('vendor', function() {
        return gulp.src(vendorFiles)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(vendorDest));
    });

    gulp.task('minify', function() {
        return gulp.src(htmlFiles)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(concat('templates-app.js'))
        .pipe(gulp.dest(htmlDst));
    });

    gulp.task('less', function () {
        gulp.src('src/theme/less/main.less')
        .pipe(less())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('css/'));
    });

    gulp.task('build', function(){
        gulp.watch('src/**/*.js', ['scripts']);
        gulp.watch('./src/**/*.html', ['minify']);
        gulp.watch('./src/**/*.less', ['less']);
    });

    gulp.task('serve', function() {
        loading.connect.server({
            port: 8075,
            root: './'
        });
    });

    gulp.task('default', ['scripts', 'less', 'minify', 'build', 'serve']);
})();