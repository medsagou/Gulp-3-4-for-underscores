// by Mohamed Sagou 
// github repo: https://github.com/medsagou?tab=repositories
//      create a folder inside the themes directory
//      Install gulp globally : * npm install gulp-cli -g
//      create package.json file : * npm init
//      Install gulp locally :
//              - terminale
//              - npm install --save-dev gulp gulp-sass browser-sync autoprefixer gulp-jshint gulp-newer gulp-postcss gulp-sourcemaps jshint gulp-imagemin
//      update the themname const in this file then paste it in the same folder;
//      go back to the terminale and type: *gulp watch
//      that it!



const themename = 'theme-name';

const gulp = require('gulp');
// Prepare and optimize code etc
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const image = require('gulp-imagemin');
const jshint = require('gulp-jshint');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
// Only work with new or updated files
const newer = require('gulp-newer');

// Name of working theme folder
var root = '../' + themename + '/';
var scss = root + 'sass/';
var js = root + 'js/';
var img = root + 'images/';
var languages = root + 'languages/';

function css(){
	
    return gulp.src(scss + '{style.scss,rtl.scss}')
	.pipe(sourcemaps.init())
	.pipe(sass({
		outputStyle: 'expanded', 
		indentType: 'tab',
		indentWidth: '1'
	}).on('error', sass.logError))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
	]))
	.pipe(sourcemaps.write(scss + 'maps'))
	.pipe(gulp.dest(root));
}

function images() {
	return gulp.src(img + 'RAW/**/*.{jpg,JPG,png}')
	.pipe(newer(img))
	.pipe(image())
	.pipe(gulp.dest(img));
};

function javascript() {

	return gulp.src([js + '*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(gulp.dest(js));
};

function watch() {
    browserSync.init({ 
		open: 'external',
		proxy: 'localhost/wordpress'
	});
    // gulp.watch('./scss/**/*.scss', style);
    // gulp.watch('./*.html').on('change', browserSync.reload);
    // gulp.watch('./js/**/*.js').on('change',browserSync.reload);

	
	gulp.watch([root + '**/*.css', root + '**/*.scss' ] , css);
	gulp.watch(js + '**/*.js', javascript);
	gulp.watch(img + 'RAW/**/*.{jpg,JPG,png}', images);
	gulp.watch(root + '**/*').on('change', browserSync.reload);
	// gulp.watch('**/*.css').on('change', browserSync.reload); //optional
}

exports.style = css;
exports.javascript = javascript;
exports.images = images;
exports.watch = watch;