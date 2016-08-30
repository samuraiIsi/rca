(function() {
    'use strict';

    var gulp = require('gulp'),
        $ = require('gulp-load-plugins')(),
        browserSync = require('browser-sync'),
        del = require('del'),
        mainBowerFiles = require('main-bower-files'),
        reload = browserSync.reload,
        wiredep = require('wiredep').stream,
        historyApiFallback = require('connect-history-api-fallback');

    /** Configuration & Helper Methods **/
    var config = (function() {
        var cfg = {};

        cfg.debug = false;
        cfg.env = 'debug';
        
        cfg.destDir = function () {
            return ['./build/gulp/', cfg.env].join('');
        };

        cfg.ports = {
            dev: 8375,
            test: 8376
        };

        cfg.exitOnError = true;
        
        cfg.filterBowerFile = function(file) {
            // Filter out src, minified files etc.
            var excludeFilePattern = /src|.min.js|npm.js|demo|index|test|karma|grunt|bootstrap(-less)?\\js/i;

            // Exceptions to the above pattern (e.g. when bower package only contains minified dist version)
            var exceptions = [
                'ng-table.min.js'
            ];
            
            var fileName = file.path.replace(/^.*[\\\/]/, '');
            
            return !excludeFilePattern.test(fileName) && exceptions.indexOf === -1;
        };
                        
        cfg.handleError = function(error) {
            var errorMessage = $.util.colors.red(error);
            $.util.log(errorMessage);

            if (config.exitOnError) { // stops plugin errors killing the Watch task
                process.exit(1);
            }
        };

        cfg.isDebug = function() {
            return cfg.env === 'debug';
        };

        cfg.uglifySettings = {
            mangle: false
        };
        
        return cfg;
    })();


    // Default Task
    gulp.task('default', ['watch']);

    // Watch Tasks
    gulp.task('watch', ['build:debug', 'connect', '_watch:unittests']);
    gulp.task('watch:notests', ['build:debug', 'connect', '_watch:notests']);
    gulp.task('watch:alltests', ['build:debug', 'connect', '_watch:alltests']);
    
    gulp.task('_watch:unittests', ['browser-sync'], function() {
        config.exitOnError = false;

        gulp.watch('./src/index.html', ['index']);
        gulp.watch('./src/**/*.html', ['html']);
        gulp.watch('./src/**/*.less', ['css']);
        gulp.watch('./gulpfile.js', ['lint']);
        gulp.watch(['./src/**/*.js', './test/**/*.js'], ['lint', 'js', 'karma']);
    });

    gulp.task('_watch:notests', ['browser-sync'], function() {
        config.exitOnError = false;

        gulp.watch('./src/index.html', ['index']);
        gulp.watch('./src/**/*.html', ['html']);
        gulp.watch('./src/**/*.less', ['css']);
        gulp.watch('./gulpfile.js', ['lint']);
        gulp.watch(['./src/**/*.js', './test/**/*.js'], ['lint', 'js']);
    });

    gulp.task('_watch:alltests', ['browser-sync'], function() {
        config.exitOnError = false;

        gulp.watch('./src/index.html', ['index']);
        gulp.watch('./src/**/*.html', ['html']);
        gulp.watch('./src/**/*.less', ['css']);
        gulp.watch('./gulpfile.js', ['lint']);
        gulp.watch(['./src/**/*.js', './test/**/*.js'], ['lint', 'js', 'karma', 'protractor']);
    });


    /*** Build ***/
    gulp.task('build:debug', function(done) {
        config.env = 'debug';
        $.sequence('clean:debug', ['lint', 'bower', 'css', 'html', 'js', 'pagination-tpl', 'assets', 'web-config', 'rev-txt'], 'index', done);
    });

    gulp.task('build:release', function(done) {
        config.env = 'release';
        $.sequence('clean:release', ['lint', 'bower', 'css', 'html', 'js', 'pagination-tpl', 'assets', 'web-config', 'rev-txt'], 'index', done);
    });


    /*** Clean ***/
    gulp.task('clean:debug', function(done) {
        config.env = 'debug';

        del(config.destDir(), {
            force: true
        }, done);
    });

    gulp.task('clean:release', function(done) {
        config.env = 'release';

        del(config.destDir(), {
            force: true
        }, done);
    });


    /*** Build Sub-Tasks ***/
    // Bower
    gulp.task('bower', function() {
        var jsFilter = $.filter(['**/*.js']),
            cssFilter = $.filter(['**/*.css', '!**/*bootstrap*']);

        return gulp
            .src(mainBowerFiles(), {
                base: 'vendor'
            })
            .pipe($.ignore(config.filterBowerFile))
            .pipe(jsFilter)
            .pipe($.if(!config.isDebug(), $.concat('vendor.js')))
            .pipe($.if(!config.isDebug(), $.uglify(config.uglifySettings)))
            .pipe(gulp.dest(config.destDir() + '/vendor'))
            .pipe(jsFilter.restore())
            .pipe(cssFilter)
            .pipe($.concat('vendor.css'))
            .pipe($.if(!config.isDebug(), $.minifyCss()))
            .pipe(gulp.dest(config.destDir() + '/theme'));
    });

    // CSS
    gulp.task('css', function() {
        return gulp
            .src(['./src/theme/less/main.less'])
            .pipe($.less().on('error', config.handleError))
            .pipe($.if(!config.isDebug(), $.minifyCss()))
            .pipe(gulp.dest(config.destDir() + '/theme'))
            .pipe(reload({
                stream: true
            }));
    });

    // HTML
    gulp.task('html', function() {
        return gulp
            .src('./src/app/**/*.tpl.html')
            .pipe($.ngHtml2js({
                moduleName: 'templates-app'
            }).on('error', config.handleError))
            .pipe($.concat('templates-app.js'))
            .pipe($.if(!config.isDebug(), $.uglify(config.uglifySettings)))
            .pipe(gulp.dest(config.destDir() + '/templates'))
            .pipe(reload({
                stream: true
            }));
    });

    // JS
    gulp.task('js', function() {
        return gulp
            .src(['./src/app/app.js', './src/app/*.config.js', './src/common/config.js', './src/app/**/*.js', './src/common/**/*.js', './test/tests/**/*.test.setup.js'])
            .pipe($.if(!config.isDebug(), $.concat('app.js')))
            .pipe($.ngAnnotate({
                add: true,
                remove: false,
                single_quotes: true
            }).on('error', config.handleError))
            .pipe($.if(!config.isDebug(), $.uglify(config.uglifySettings)))
            .pipe(gulp.dest(config.destDir() + '/js'))
            .pipe(reload({
                stream: true
            }));
    });

    // Copy Web Config
    gulp.task('web-config', function() {
        return gulp
            .src('./Configs/web.config')
            .pipe(gulp.dest(config.destDir()))
            .pipe(reload({
                stream: true
            }));
    });
	
	// Copy rev.txt
    gulp.task('rev-txt', function() {
        return gulp
            .src('./rev.txt')
            .pipe(gulp.dest(config.destDir()))
            .pipe(reload({
                stream: true
            }));
    });

    // Assets
    gulp.task('assets', function() {
        return gulp
            .src(['./src/theme/assets/**/*', './vendor/bootstrap-less-only/**/fonts/*'])
            .pipe(gulp.dest(config.destDir() + '/theme/assets'));
    });

    // Index.html
    gulp.task('index', function() {
        var sources = gulp
            .src([
                './**/vendor.js',
                './app.js',
                './js/**/*.js',
                './templates/**/*.js',
                './**/*.css'
            ], {
                read: false,
                cwd: config.destDir()
            });

        return gulp
            .src('./src/index.html')
            .pipe($.if(config.isDebug(), wiredep({
                ignorePath: '../'
            })))
            .pipe($.inject(sources))
            .pipe($.if(!config.isDebug(), $.htmlReplace({
                BrowserSync: ''
            })))
            .pipe($.if(!config.isDebug(), $.minifyHtml({
                empty: true,
                cdata: true,
                comments: false,
                conditionals: true,
                spare: true,
                quotes: true,
                loose: false
            })))
            .pipe(gulp.dest(config.destDir()))
            .pipe(reload({
                stream: true
            }));
    });

    // Copy Pagination Template
    gulp.task('pagination-tpl', function() {
        return gulp
            .src(['./vendor/angular-utils-pagination/dirPagination.tpl.html'])
            .pipe(gulp.dest(config.destDir() + '/templates'));
    });

    /*** Code Quality ***/
    gulp.task('lint', function() {
        return gulp
            .src(['./gulpfile.js', './src/**/*.js']) //, './test/tests/**/*.js'
            .pipe($.jshint().on('error', config.handleError))
            .pipe($.jshint.reporter('default'));
    });

    gulp.task('karma', function() {
        return gulp
            .src('./foobar') //force karma to use the file paths in karma config
            .pipe($.karma({
                action: 'run',
                configFile: ['./test/config/karma.', config.env, '.conf.js'].join(''),
                singleRun: true
            }))
            .on('error', config.handleError);
    });

    gulp.task('protractor', function() {
        $.connect.server({
            port: config.ports.test,
            root: config.destDir(),
            proxy: 'local.totesport.com:' + config.ports.test,
            middleware: function(connect, opt) {
                return [ historyApiFallback ];
            }
        });

        gulp
           .src(['./test/tests/**/*.definitions.js'])
           .pipe($.angularProtractor({
               'autoStartStopServer': false,
               'configFile': './test/config/protractor.conf.js',
               'debug': false
           }))
           .on('error', config.handleError)
           .on('end', function() { $.connect.serverClose(); });
    });


    /*** Run Tests ***/
    gulp.task('test', ['test:debug']);

    gulp.task('test:debug', function(done) {
        config.env = 'debug';
        $.sequence('lint', 'karma', 'protractor', done);
    });

    gulp.task('test:release', function(done) {
        config.env = 'release';
        $.sequence('lint', 'karma', 'protractor', done);
    });


    /*** Serve & Reload ***/
    gulp.task('browser-sync', function() {
        browserSync({
            logLevel: 'silent',
            open: false
        });
    });

    gulp.task('connect', ['build:debug'], function() {
        $.connect.server({
            port: config.ports.dev,
            root: config.destDir(),
            proxy: 'local.totesport.com:' + config.ports.dev,
            middleware: function(connect, opt) {
                return [ historyApiFallback ];
            }
        });

        return gulp
            .src(config.destDir() + '/index.html')
            .pipe($.open('', {
                url: 'http://local.totesport.com:' + config.ports.dev
            }));
    });
})();