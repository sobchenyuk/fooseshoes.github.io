const { watch, series } = require('gulp');
const browserSync = require("browser-sync");

const   livereliad = browserSync.create();

function browsersyncServe(cb){
    livereliad.init({
        server: {
            baseDir: "./"
        },
        host: 'localhost',
        port: 3000,
        logPrefix: "landing",
        reloadDelay: 500
    });
    cb();
}

function browsersyncReload(cb){
    livereliad.reload();
    cb();
}

function watchTask(){
    watch([`./**/*.*`, '!node_modules/**/*'], browsersyncReload);
}

exports.default = series(browsersyncServe, watchTask)
