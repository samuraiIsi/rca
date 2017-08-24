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
        concatVendor= require('gulp-concat-vendor'),
        angularTemplateCache = require('gulp-angular-templatecache');
    loading = require('gulp-load-plugins')();

    var jsFiles = 'src/**/**/**/*.js',
        htmlFiles = 'src/**/**/**/*.html',
        vendorFiles = 'vendor/*.js',
        vendorDest = 'build/src',
        jsDest = 'build/src',
        htmlDst = 'build/src';

    gulp.task('scripts', function() {
        return gulp.src(jsFiles)
            .pipe(gulp.dest(jsDest))
            .pipe(concat('scripts.js'))
            .pipe(ngAnnotate({ add: true }))
            .pipe(gulp.dest(jsDest))
            .pipe(uglify())
            .pipe(rename('scripts.min.js'))
            .pipe(gulp.dest(jsDest));
    });

    // gulp.task('vendor', function() {
    //     return gulp.src(vendorFiles)
    //         .pipe(concat('vendor.js'))
    //         .pipe(gulp.dest(vendorDest));
    // });

    gulp.task('vendor', function() {
        gulp.src(vendorFiles)
            .pipe(concatVendor('vendor.js'))
            .pipe(gulp.dest(vendorDest));
    });

    gulp.task('templates', function() {
        return gulp.src(htmlFiles)
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(angularTemplateCache('templates-app.js', {
                module: 'app',
                root: 'src/'
            }))
            .pipe(gulp.dest(htmlDst));
    });

    gulp.task('less', function() {
        gulp.src('src/theme/less/main.less')
            .pipe(less())
            .pipe(cleanCSS({ compatibility: 'ie8' }))
            .pipe(gulp.dest('css/'));
    });

    gulp.task('build', function() {
        gulp.watch('src/**/*.js', ['scripts']);
        gulp.watch('./src/**/*.html', ['templates']);
        gulp.watch('./src/**/*.less', ['less']);
        gulp.watch('./src/**/*.js', ['vendor']);
    });

    gulp.task('serve', function() {
        loading.connect.server({
            port: 8075,
            root: './'
        });
    });

    gulp.task('default', ['scripts', 'less', 'templates', 'build', 'vendor', 'serve']);
})();