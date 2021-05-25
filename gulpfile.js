const gulp = require("gulp"),
	pug=require("gulp-pug");
`	// minifyCSS = require('gulp-minify-css'),
	// concat = require('gulp-concat'),
	// uglify = require('gulp-uglify'),
	// prefix = require('gulp-autoprefixer'),
	// browserSync = require('browser-sync').create(),
	// htmlmin = require('gulp-htmlmin'),
	// imagemin = require('gulp-imagemin'),
	// del = require("del"),
	// reload = browserSync.reload;
`



gulp.task("pug", function () {
	return gulp.src("src/*pug")
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest("src"))
});

gulp.task("watch", function () {
	gulp.watch("src/*.pug", gulp.parallel("pug"));
})

gulp.task("default", gulp.parallel("watch"));



// gulp.task('serve', function () {

// 	browserSync.init({
// 		server: {
// 			baseDir: "./"
// 		}
// 	});

// 	gulp.watch("*.html").on("change", reload);
// });

// // Minifies JS
// gulp.task('js', function () {
// 	return gulp.src('src/js/*.js')
// 		.pipe(uglify())
// 		.pipe(gulp.dest('dist/js'))
// 		.pipe(browserSync.stream())

// });
// // Image compressor
// gulp.task('image', function () {
// 	return gulp.src('src/img/*.png')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('dist/img'))
// 		.pipe(browserSync.stream())

// })
// // HTML min
// gulp.task('minify', function () {
// 	return gulp.src('src/*.html')
// 		.pipe(htmlmin({ collapseWhitespace: true }))
// 		.pipe(gulp.dest('dist'))
// 		.pipe(browserSync.stream())
// });
// // CSS concat & minify
// gulp.task('styles', function () {
// 	return gulp.src('src/css/*.css')
// 		.pipe(prefix('last 2 versions'))
// 		.pipe(concat('style.min.css'))
// 		.pipe(minifyCSS())
// 		.pipe(gulp.dest('dist/css'))
// 		.pipe(browserSync.stream())

// });
// function watchFiles(param) {
// 	gulp.watch('src/**/*.html')
// 	gulp.watch('src/**/*.js' )
// 	gulp.watch('src/**/*.css' )
// 	gulp.watch('src/**/*.{jpeg,png,svg,gif,ico,webp}')
// 	param()
// }
// function clean1(param) {
// 	return del("dist");

// }
// // gulp.task('default', function(cb) {
// // 	gulp.series("styles", "js","minify","image","serve")
// // 	cb()
// // });

// let build = gulp.series(clean1, "styles", "js", "minify", "image", gulp.parallel( watchFiles, "serve"));
// exports.build = build;
// exports.watch = build;
// exports.default = build;

