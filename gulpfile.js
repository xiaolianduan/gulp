        var gulp = require('gulp');
        var uglify = require('gulp-uglify');
        var uglifycss = require('gulp-uglifycss');
        var less=require('gulp-less');
        var concat=require('gulp-concat');
        var connect=require('gulp-connect');

        gulp.task('uglifyjs', function(){
            gulp.src("src/js/*.js").pipe(concat("min.js")).pipe(uglify()).pipe(gulp.dest("test/js/"))
        });
        gulp.task('uglifycss', function(){
            gulp.src("src/css/*.css").pipe(uglifycss()).pipe(gulp.dest("test/css/"))
        });
        gulp.task('less', function(){
            gulp.src("src/less/*.less").pipe(less()).pipe(uglifycss()).pipe(gulp.dest
            ("test/less/"))
        });

        gulp.task('default', function(){
            connect.server({
                root:'',
                port: 8080,
                livereload:true
            });
            gulp.watch('src/js/*.js', ['uglifyjs']);
            gulp.watch('src/css/*.css', ['uglifycss']);
            gulp.watch('src/less/*.less', ['less']);
        });

             