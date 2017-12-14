let gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba')

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
    notify: false,
    open: false
  })
})

// watch function

gulp.task('watch', ['browserSync', 'scripts', 'styles'], () => {

  watch('./app/css/**/*.css', () => { gulp.start('cssInject')})
  watch('./app/js/**/*.js', () => {
    gulp.start('scriptsRefresh')
  } )
  watch('./app/index.html', browserSync.reload )

})



// postcss function
gulp.task('styles', () => {
  return gulp.src('./app/css/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]).on('error', function(err) {// Error handling / not chrash the gulp watch
            console.error(err.message);// Display error in the terminal
            browserSync.notify(err.message, 5000); // Display error in the browser
            this.emit('end'); // Prevent gulp from catching the error and exiting the watch process
        }))
    .pipe(gulp.dest('./app/temp/css'))
})

gulp.task('scriptsRefresh', ['scripts'], () => {
    browserSync.reload()
})


// cssInject function
gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./app/css/*.css')
    .pipe(browserSync.stream())
})
