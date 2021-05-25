const del = require('del'),
    gulp = require('gulp'),
    browserSync = require("browser-sync").create(),
    autoprefixer = require("gulp-autoprefixer"),
    mediaqueries = require('gulp-group-css-media-queries'),
    watch = require("gulp-watch"),
    scss = require('gulp-sass'),
    htmlmin = require("gulp-htmlmin"),
    concat = require("gulp-concat"),
    csso = require('gulp-csso'),
    cssminify = require("gulp-css-minify"),
    clean_css = require("gulp-clean-css"),
    minify = require("gulp-minify"),
    uglify = require("gulp-uglify"),
    plumbir = require("gulp-plumber"),
    sourcemaps = require("gulp-sourcemaps"),
    imagemin = require('gulp-imagemin'),
    flatten = require('gulp-flatten'),
    spritesmith = require('gulp.spritesmith'),
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require('gulp-ttf2woff2'),
    svg_sprite = require('gulp-svg-sprite'),
    fonter = require('gulp-fonter'),
    through = require('through2'),
    favicons = require('gulp-favicons'),
    pug = require('gulp-pug'),
    rename = require("gulp-rename");
scss.compiler = require('node-sass');

const project_folder = "dist"
const source_folder = "src"
let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",

    },
    src: {
        html: source_folder + "/**/*index.html",
        css: source_folder + "/**/*.{css,scss}",
        js: source_folder + "/**/*.js",
        img: source_folder + "/**/*.{png,gif,jpg,jpeg,svg,ico,webp}",
        fonts: source_folder + "/**/*.ttf",
        pug: source_folder + "/**/*.pug",
        readypug: source_folder + "/",

    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/**/*.css",
        scss: source_folder + "/**/*.scss",
        js: source_folder + "/**/*.js",
        img: source_folder + "/**/*.{jpg,jpeg,png,svg,gif,ico,webp}",
        pug: source_folder + "/**/*.pug",
    },
    clean: "./" + project_folder + "/",
};

let fs = require("fs");
let { src, dest } = require("gulp");
const gulpPlumber = require('gulp-plumber');

//browser-sync
function browserSsync(param) {
    browserSync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3001,
        notify: false
    })
};

//pug
function pug1() {
    return src(path.src.pug)
        .pipe(pug({
            pretty: true
        }))
        .pipe(flatten({ includeParents: 0 }))
        .pipe(dest(path.src.readypug))
        .pipe(browserSync.stream())

};

//html minify
function html() {
    return src(path.src.html)

        .pipe(sourcemaps.init())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest(path.build.html))
        .pipe(sourcemaps.write('../maps'))
        .pipe(browserSync.stream())
}

//css
function css() {
    return src(path.src.css)
        .pipe(sourcemaps.init())
        .pipe(scss().on('error', scss.logError))
        .pipe(csso({
            restructure: true,
            sourceMap: true,
            debug: true
        }))
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 5 version"],
                cascade: true
            })
        )
        .pipe(mediaqueries())
        .pipe(concat("style.css"))
        .pipe(dest(path.build.css))
        .pipe(cssminify())
        .pipe(clean_css())
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        .pipe(dest(path.build.css))
        .pipe(sourcemaps.write('../maps'))
        .pipe(browserSync.stream())
}

//js
function js() {
    return src(path.src.js)
        .pipe(concat("scripte.js"))
        .pipe(uglify({}))
        .pipe(dest(path.build.js))
        .pipe(browserSync.stream())
}
//img

function imgcompress() {
    return src(path.src.img)
        .pipe(imagemin())
        .pipe(flatten({ includeParents: 0 }))
        .pipe(dest(path.build.img))
        .pipe(browserSync.stream())
}

//fonts
function fonts() {
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts));
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts));
}
//fonts otf
function fontsotf() {
    return src(path.src + "**/*.otf")
        .pipe(fonter({
            formats: ["ttf"]
        }))
        .pipe(dest(path.src.fonts))
}


//svg sprite
function svg() {
    return src("./src/img/*.svg")
        .pipe(svg_sprite({
            mode: {
                stack: {
                    sprite: "icons.svg"
                }
            }
        }))
        .pipe(flatten({ includeParents: 0 }))
        .pipe(dest("./dist/img/"))
}

//img-sprite
function sprite(cb) {
    let spriteData = src("./src/img/*.png")
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css',
            // algorithm:'alt-diagonal',
        }));
    spriteData.img.pipe(gulp.dest('./src/img/'));
    spriteData.css.pipe(gulp.dest('./src/css/'));
    cb()
};



//favicon
function fav(cb) {
    src('./dist/img/favicon.jpg')
        .pipe(favicons({
            settings: { background: '#1d1d1d', vinylMode: true }
        }, function (code) {
            console.log(code);
        }))
        .pipe(through.obj(function (file, enc, cb) {
            console.log(file.path);
            this.push(file);
            cb();
        }))
        .pipe(dest('./dist/img/favicons/'));
    cb();
};

//watch
function watchFiles() {

    gulp.watch([path.watch.js], js)
    gulp.watch([path.watch.img], imgcompress)
    gulp.watch([path.src.pug], pug1)
    gulp.watch([path.watch.css], css)
    gulp.watch([path.watch.html], html)

}

function clean1() {
    return del(path.clean);

}
let watch1 = gulp.series(clean1, pug1, html, sprite, css, js, fontsotf, fonts, imgcompress, gulp.parallel(watchFiles, browserSsync),); //fav   svg



exports.pug1 = pug1
exports.svg = svg;
exports.sprite = sprite;
exports.fav = fav;
exports.fontsotf = fontsotf;
exports.fonts = fonts;
exports.html = html;
exports.js = js;
exports.css = css;
exports.imgcompress = imgcompress;
exports.watch = watch1;
exports.default = watch1;