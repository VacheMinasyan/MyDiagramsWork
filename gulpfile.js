const gulp = require("gulp"),
pug=require("gulp-pug");
   



gulp.task("pug",function(){
return gulp.src("src/*pug")
.pipe(pug({
    pretty:true
}))
.pipe(gulp.dest("src"))
});





gulp.task("watch",function(){
    gulp.watch("src/*.pug",gulp.parallel("pug"));
})

gulp.task("default",gulp.parallel("watch"));