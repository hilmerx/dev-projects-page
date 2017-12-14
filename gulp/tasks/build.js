let gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
cssnano = require('gulp-cssnano'),
rev = require('gulp-rev'),
uglify = require('gulp-uglify'),
usemin = require('gulp-usemin'),
browserSync = require('browser-sync').create()


gulp.task('previewDist', () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
        notify: false,
        open: false
    })
})


gulp.task('deleteDistFolder', () => {
    return del('./dist')
})

gulp.task('copyGeneralFiles', ['deleteDistFolder'], () => {
    var pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/images/**',
        '!./app/scripts/**',
        '!./app/js/**',
        '!./app/vendor-js/**',
        '!./app/vendor-js',
        '!./app/temp',
        '!./app/temp/**'

    ]

    gulp.src(pathsToCopy)
        .pipe(gulp.dest('./dist')) 

})

gulp.task('optimizeImages', () => {
    return gulp.src(['./app/images/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass:true
        }))
        .pipe(gulp.dest('./dist/images'))
})


gulp.task('usemin', ['deleteDistFolder'], () => {
    return gulp.src('./app/index.html')
        .pipe(usemin({
            css:[function() {return rev()}, function() {return cssnano()}],
            js: [function() {return rev()}, function() {return uglify()}]
        }))
        .pipe(gulp.dest("./dist"))
})

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin'])