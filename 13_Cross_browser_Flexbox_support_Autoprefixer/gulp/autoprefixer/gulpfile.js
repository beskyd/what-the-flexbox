var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");


gulp.task('styles', function() {
    // gulp.src('style.css')
    gulp.src('*.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('build'))
});

gulp.task('watch', function() {
    gulp.watch('*.css', ['styles']);
});