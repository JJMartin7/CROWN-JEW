const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

gulp.task('styles', function() {
    return gulp.src('src/scss/**/*.scss') // Cambia 'src/scss/' a la ruta de tus archivos SCSS
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css')); // Cambia 'dist/css' al directorio donde quieres guardar el CSS compilado
});

gulp.task('default', gulp.series('styles'));