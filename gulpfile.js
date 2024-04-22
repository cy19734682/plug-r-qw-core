/**
 * 样式文件打包
 * created at 2023.04.27
 * @author Ricky email:zhangqingcq@foxmail.com
 */

import gulp from 'gulp'
import less from 'gulp-less'
import autoprefixer from 'gulp-autoprefixer'
import rename from 'gulp-rename'
import cleanCSS from 'gulp-clean-css'
import del from 'del'

const { src, dest } = gulp

//编译 less
function build(cb) {
	src('./src/style/index.less')
		.pipe(less({ style: 'expanded' }))
		.pipe(autoprefixer('last 3 version', 'safari 5', 'ie 8', 'ie 9'))
		.pipe(cleanCSS())
		.pipe(rename('plugRQw.min.css'))
		.pipe(dest('./lib'))
	cb()
}

// 拷贝字体文件
function fonts(cb) {
	src([
		'./src/style/iconfont/*.svg',
		'./src/style/iconfont/*.ttf',
		'./src/style/iconfont/*.woff',
		'./src/style/iconfont/*.woff2'
	]).pipe(dest('./lib/iconfont'))
	cb()
}

//拷贝国际化文件
function lang(cb) {
	src(['./src/locale/lang/*.js', './src/locale/lang/*.ts']).pipe(dest('./lib/lang'))
	cb()
}

function clean(cb) {
	del(['plugRQw.min.css', './lab/iconfont/'])
	cb()
}

export function clean_temp(cb) {
	del(['./temp'])
	cb()
}

export const lib = gulp.series(clean, build, lang)
