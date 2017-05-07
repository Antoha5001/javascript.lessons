var gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS				= require('gulp-clean-css'),
		cssnano					= require('gulp-cssnano'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		imagemin       = require('gulp-imagemin'),
		cache          = require('gulp-cache'),
		autoprefixer   = require('gulp-autoprefixer'),
		ftp            = require('vinyl-ftp'),
		notify         = require("gulp-notify"),
		gcmq         = require("gulp-group-css-media-queries"),
		srv 						= 'javascript.lessons:82';

// Скрипты проекта

gulp.task('common-js', function() {
	return gulp.src([
		'app/script/2gis.js',
		'app/script/myscript.js',
		])
	.pipe(concat('common.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/script'));
});

gulp.task('js', ['common-js'], function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/modernizr/modernizr-custom.js',
		'app/script/common.min.js', // Всегда в конце
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Минимизировать весь js (на выбор)
	.pipe(gulp.dest('app/script'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync',['js','css-libs'], function() {
	browserSync.init({
		/*server: {
			baseDir: '500303_GULP'
		},*/
		proxy:srv,
		notify: false
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

//gulp.task('sass', function() {
	//return gulp.src('500303_GULP/scss/**/*.scss')
	//.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
	/*.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleanCSS()) // Опционально, закомментировать при отладке
	.pipe(gulp.dest('500303_GULP/css'))
	.pipe(browserSync.reload({stream: true}));
});*/
gulp.task('sass', function () {
	return gulp.src('app/scss/*.scss') //берем какие-нибудь файлы, и возвращаем
				.pipe(sass()) // вызов како-то команды, плагина,
				.pipe(gcmq()) // Группируем media запросы
				.pipe(autoprefixer(['last 15 versions','> 1%','ie 8','ie 7'],{cascade:true}))
				.pipe(gulp.dest('app/css')) //выгружаем работу плагина
				.pipe(browserSync.reload({stream:true})); //инжектим css
}); // инструкция, задача
gulp.task('css-libs',['sass'], function(){
	return gulp.src(['app/css/mystyle.css',])
				.pipe(cssnano())
				.pipe(rename({suffix:'.min'}))
				.pipe(gulp.dest('app/css'))
				.pipe(browserSync.reload({stream:true}));
});
gulp.task('watch', ['css-libs', 'js', 'browser-sync'], function() {
	gulp.watch('app/scss/**/*.scss', ['css-libs']);
	gulp.watch(['app/script/**/*.js', 'app/script/common.min.js'], ['js']);
	//gulp.watch('500303_GULP/*.php', browserSync.reload);
	gulp.watch('app/**/*.php').on('change', browserSync.reload);
	gulp.watch('app/**/*.html').on('change', browserSync.reload);
});

gulp.task('imagemin', function() {
	return gulp.src('app/images/**/*')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('dist/images'));
});

gulp.task('build', ['removedist', 'imagemin', 'css-libs', 'js'], function() {

	var buildFiles = gulp.src([
		'app/*.html',
		'app/*.php',
		'app/.htaccess',
		]).pipe(gulp.dest('dist'));

	var buildCss = gulp.src([
		'app/css/mystyle.min.css',
		]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'app/script/scripts.min.js',
		'app/script/form.php',
		]).pipe(gulp.dest('dist/script'));

	var buildFonts = gulp.src([
		'app/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));

	var buildModules = gulp.src([
		'app/modules/**/*',
		]).pipe(gulp.dest('dist/modules'));

});

gulp.task('deploy', function() {

	var conn = ftp.create({
		host:      'hostname.com',
		user:      'username',
		password:  'userpassword',
		parallel:  10,
		log: gutil.log
	});

	var globs = [
	'dist/**',
	'dist/.htaccess',
	];
	return gulp.src(globs, {buffer: false})
	.pipe(conn.dest('/path/to/folder/on/server'));

});

gulp.task('removedist', function() { return del.sync('dist'); });
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
