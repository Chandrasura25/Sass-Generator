const {src,dest,watch,series} = require('gulp');
const purgecss = require('gulp-purgecss');
const sass = require('gulp-sass')(require('sass'));

function buildStyles(){
    return src('asura/**/*.scss')
    // .pipe(sass()).pipe(purgecss({content:['*.html']})).pipe(dest('css'))
    .pipe(sass()).pipe(dest('css'))
}
function watchstyle(){
    watch(['asura/**/*.scss'],buildStyles)
    // watch(['asura/**/*.scss','*.html'],buildStyles)
}

exports.default = series(buildStyles,watchstyle)