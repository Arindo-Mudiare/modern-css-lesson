var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
    svgSprite = require('gulp-svg-sprite'),
    hexrgba = require('postcss-hexrgba'),
    webpack = require('webpack'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

var config = {
    mode: {
        css: {
            render: {
                css: {
                  template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}

// webpack task
gulp.task('scripts', function(callback){
    webpack(require('./webpack.config.js'), function(err,stats){
        if (err) {
            console.log(err.toString());
        }
        console.log(stats.toString());
        callback();
    });
})

// css task
gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested,hexrgba, autoprefixer]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});

// Svg sprites Task
gulp.task('createSprite', function() {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite'));
});

module.exports = {
        styles: "styles"
    }
    // watch task
gulp.task('watch', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function() {
        browserSync.reload();
    });
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });
    watch('./app/assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh');
    });
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());

});

gulp.task('scriptsRefresh', ['scripts'], function(){
  browserSync.reload();
});