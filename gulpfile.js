var gulp = require('gulp');
var cache = require('gulp-cached');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

var sourcemaps = require('gulp-sourcemaps');

var watch = require('gulp-watch');
var browserSync = require('browser-sync');

var del = require('del');
var runSequence = require('run-sequence');


var dir = {
    dev: './src',
    dist: './dist'
};

gulp.task('style', function () {
    return gulp
        .src([
            dir.dev + '/**/*.scss'
        ])
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        // .pipe(sourcemaps.write({includeContent: false}))
        // .pipe(sourcemaps.init({loadMaps: true}))
        // .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dir.dev));
});

gulp.task('server', function () {
    browserSync({
        server: {
            baseDir: './src/',
            index: 'index.html',
            directory: true
        }
    });
});
gulp.task('server-dist', function () {
    browserSync({
        server: {
            baseDir: './dist/',
            index: 'index.html',
            directory: true
        }
    });
});

gulp.task('watch', function () {
    watch(dir.dev + '/**/*.scss', function () {
        gulp.start('style');
    });
});

gulp.task('clean', function () {
    return del([dir.dist]);
});

gulp.task('copy', function () {
    return gulp
        .src([
                dir.dev + '/**/*.+(html|jpg|png|svg|js|css|eot|ttf|woff)'
                , '!**/_**/**/*.*']
            , {base: dir.dev}
        )
        .pipe(gulp.dest(dir.dist));
});

gulp.task('default', ['watch', 'server']);
gulp.task('build', function (callback) {
    return runSequence(
        'clean', 'style', 'copy',
        callback
    );
});