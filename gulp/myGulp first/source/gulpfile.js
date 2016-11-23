var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var wrap = require('gulp-wrap');

//创建sass任务
gulp.task('sass',function(){
	gulp.src('styles/main.scss')
		.pipe(sass())
		.pipe(prefix())
		.pipe(gulp.dest('../styles'));
});

gulp.task('cp',function(){
	gulp.src('index.html')
		.pipe(gulp.dest('..'));
});

gulp.task('build',function(){
	gulp.src('home.html')
		.pipe(wrap({src:'index.html'}))
		.pipe(gulp.dest('..'));
});

gulp.task('watch',function(){
	gulp.watch(['*.html'],['build']);
	gulp.watch(['*.html'],['cp']);
	gulp.watch(['styles/*.scss'],['sass']);
})

gulp.task('default',['sass','cp','build','watch']);