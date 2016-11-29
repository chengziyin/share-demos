var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var fileinclude = require('gulp-file-include');
var imagemin = require('gulp-imagemin');

//执行sass任务：将所有的scss文件编译为css文件
gulp.task('sass',function(){
	gulp.src('styles/**/*.scss')
		.pipe(sass({outputStyle:'expanded'}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('../dest/styles'));
});

//执行复制copy任务，将source里面的页面html复制到dest里面的layouts对应的文件夹里面
// gulp.task('cp',function(){
// 	gulp.src(['layouts/**/*.html','!common_files/*.html'])
// 		.pipe(gulp.dest('../dest/layouts'));
// });
gulp.task('fileinclude',function(){
	gulp.src(['layouts/**/*.html','!layouts/common_files/**.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('../dest/layouts'));
});

//将所有的js文件复制到js文件夹中
gulp.task('cp',function(){
	gulp.src('jsfiles/**/*.js')
		.pipe(gulp.dest('../dest/jsfiles'));
});

//将所有的图片复制压缩到dest里面的images文件夹内
gulp.task('image',function(){
	gulp.src('images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('../dest/images'));
});

//执行监听所有的任务
gulp.task('watch',function(){
	gulp.watch(['styles/**/*.scss'],['sass']);
	gulp.watch(['layouts/**/*.html'],['fileinclude']);
	gulp.watch(['jsfiles/**/*.js'],['cp']);
});

//执行gulp默认的执行任务
gulp.task('default',['sass','fileinclude','image','cp','watch']);