/**
 * Created by pc on 2016/3/8.
 */

"use strict";

var gulp         = require('gulp');
var browserSync = require('browser-sync').create();
var rename       = require('gulp-rename');
var concat       = require('gulp-concat');
var px3rem       = require("gulp-px3rem");
var sass         = require('gulp-sass');
var uglify 		  = require("gulp-uglify");
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require("gulp-minify-css");


//编译sass，标记maps文件
gulp.task("sass",function(){
	return  gulp.src(['css/sass/*.scss','!css/sass/base.scss'])

			.pipe(sourcemaps.init())
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('./css/style'))
			.pipe(concat('main.css'))
			.pipe(sourcemaps.write('./maps'))
			.pipe(browserSync.stream())
			.pipe(gulp.dest('./css'));

});

//js压缩
gulp.task('minify-js', function () {
	gulp.src('js/src/*.js') // 要压缩的js文件
		.pipe(uglify())//使用uglify进行压缩,更多配置请参考：
		.pipe(rename({suffix:".min"}))
		.pipe(gulp.dest('js/minJs')); //压缩后的路径
});

//Static server
gulp.task('browser-sync', function() {
	var files = [
		'pages/*.html',
		'css/sass/*.scss',
		'js/src/*.js'
	];
	browserSync.init(files,{
		server: {
			baseDir: "//"//定义从那个位置启动服务器
		}
	});
});
gulp.task('watch', function () {
	gulp.watch([
		'css/sass/*.scss',
		'pages/*.html',
		'js/src/*.js'
	], ['minify-js','sass']);
});


//,'browser-sync'
gulp.task('default', ['watch','browser-sync']);
function errorHandler(error){
	this.emit('end');
}
