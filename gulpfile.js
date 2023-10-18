const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps')


// gulp.task('sass-compile', function(){ 
// 	return gulp.src('./assets/style/**/*.scss')
// 		.pipe(sourcemaps.init())
// 		.pipe(sass().on('error', sass.logError)) 
// 		.pipe(sourcemaps.write('./'))
// 		.pipe(gulp.dest('./assets/style/css'))
// });
const sassCompile = (done) => {
    return gulp.src('./assets/style/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError)) 
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./assets/style/css'))
        done();

}
// const watchers = (done) => {
//     watch('./src/sass/*.scss', series(sassCompile))
//     done()
// }
exports.compile = sassCompile;

// exports.watchers = function() {
//     watch('./src/sass/*.scss', sassCompile),done => {
//         done();
//         }
// };


gulp.task('watch', function(){
	gulp.watch('./src/sass/*.scss', gulp.series('compile'))
    done()
})



// exports.default = function() {
//     // You can use a single task
//     watch('src/*.css', css);
//     // Or a composed task
//     watch('src/*.js', series(clean, javascript));
//   };