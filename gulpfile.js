const gulp = require('gulp');  
const imagemin = require('gulp-imagemin'); //Compresor de imágenes
const imageminPngcrush = require('imagemin-pngcrush'); //Optimiza las imágenes .PNG
const watch = require('gulp-watch'); //Sirve para mantener vigilando los cambios de una tarea
const notify = require('gulp-notify'); //Muestra un mensaje callback

//Tarea para Comprimir Imagenes
gulp.task('comprimir-images', function(){
	return watch('./images/*.*', function () { //Comprueba si hay cambios en la carpeta y subcarpetas de images
		gulp.src('./images/*.{png,jpg,jpeg,gif,svg}') //Ruta donde buscara las imágenes con extensiones .{png,jpg,jpeg,gif,svg} a comprimir
	    .pipe(
	    	imagemin({
		      plugins:[imageminPngcrush()] //Optimiza la conversión de imágenes PNG
		    }))
	    .pipe(gulp.dest('dist/images')) //Ruta donde se guardaran la imágenes comprimidas
	    .pipe(notify("Ha finalizado la compresión de imágenes!")); //Muestra un mensaje cuando termina la tarea
	});
});

//Tarea por Defecto
gulp.task('default',['comprimir-images']);