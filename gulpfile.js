let gulp = require("gulp")
let htmlmin = require("gulp-htmlmin")
let cssmin = require("gulp-clean-css")
let concat = require("gulp-concat")
let uglify = require("gulp-uglify")
let rename = require("gulp-rename")
let babel =require("gulp-babel")
let connect = require("gulp-connect")
let sass = require("gulp-sass")

// let jsmin = require("gulp")
// 复制功能
//1压缩功能
// gulp.task("copy-index",async ()=>{
//     gulp.src("./index.html")
//     .pipe(htmlmin({
//         collapseWhitespace:true
//     }))
//     .pipe(gulp.dest("./resd"))
// })

//2复制某个类型的文件，指定扩展名html
gulp.task("copy",async ()=>{
    // gulp.watch("./src/**/*",async ()=>{
    //     gulp.src("./src/**/*")
    //     .pipe(gulp.dest("D:\\tool phpStudy\\WWW\\nz2001jingdong\\src"))
    // })

    gulp.watch("./src/*.html",async ()=>{
        gulp.src("./src/*.html")
        .pipe(gulp.dest("D:\\tool phpStudy\\WWW\\nz2001jingdong\\src"))
    })
    gulp.watch("./src/img/**/*",async ()=>{
        gulp.src("./src/img/**/*")
        .pipe(gulp.dest("D:\\tool phpStudy\\WWW\\nz2001jingdong\\src\\img"))
    })
    gulp.watch("./src/js/**/*",async ()=>{
        gulp.src("./src/js/**/*")
        .pipe(gulp.dest("D:\\tool phpStudy\\WWW\\nz2001jingdong\\src\\js"))
    })

    gulp.watch("./src/sass/*.scss",async ()=>{
        gulp.src("./src/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("D:\\tool phpStudy\\WWW\\nz2001jingdong\\src\\css"))
    })
    
    // .pipe(htmlmin({
    //     collapseWhitespace:true,
    //     removeComments: true,    
    //     collapseBooleanAttributes: true,
    //     removeEmptyAttributes: true,      
    //     removeScriptTypeAttributes: true,      
    //     removeStyleLinkTypeAttributes: true,     
    //     minifyJS: true,  
    //     minifyCSS: true,
    // }))
    

    // gulp.watch("./src/php/*.php",async ()=>{
    //     gulp.src("./src/php/*.php")
    //     .pipe(gulp.dest("D:\\tool phpStudy\\WWW\\nz2001jingdong\\php"))
    // })

    //压缩JS文件
    // gulp.watch(["./src/js/*.js","!./src/js/jquery-3.2.1.min.js"], async ()=>{[
    //     gulp.src("./src/js/*.js")
    //     .pipe(babel({
    //         presets:['@babel/env']
    //     }))
    //     .pipe(uglify())
    //     .pipe(gulp.dest("D:\\tool phpStudy\\WWW\\nz2001jingdong\\src\\js"))
    // ]})
    



    

    


})



gulp.task("watch-sass",async ()=>{
    //sass编译
    gulp.watch("./src/*.scss",async ()=>{
        gulp.src("./src/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("D:\\tool phpStudy\\WWW\\nz2001jingdong\\src\\css"))
    })
})











//3复制多个扩展名,如当前路径下，img中叫jpg、png扩展名的文件
// gulp.task("copy-img",async ()=>{
//     gulp.src("./img/*.{jpg,png}")
//     .pipe(htmlmin({
//         collapseWhitespace:true
//     }))
//     .pipe(gulp.dest("./resd"))
// })

//4,复制某个文件夹下所有的文件夹。包括其子文件夹
//如，css文件夹下所有文件夹，包括子文件夹
// gulp.task("copy-css",async ()=>{
//     gulp.src("./css/**/*")
//     .pipe(htmlmin({
//         collapseWhitespace:true
//     }))
//     .pipe(gulp.dest("./resd"))
// })

//5.多个文件夹
// gulp.task("copy-imgandcss",async ()=>{
//     gulp.src("./img/*.{jpg,png}","./css/**/*")
//     .pipe(htmlmin({
//         collapseWhitespace:true
//     }))
//     .pipe(gulp.dest("./resd"))
// })

//6.过滤问价
gulp.task("copy-imgandcss-not",async ()=>{
    gulp.src("./img/*.{jpg,png}","./css/**/*","!./img/b1.jpg")
    .pipe(htmlmin({
        collapseWhitespace:true
    }))
    .pipe(gulp.dest("./resd"))
})


//二、gulp监听
//监听index文件，发生改变就复制到指定位置
gulp.task("watch-index",async ()=>{
    gulp.watch("./index.html",async ()=>{
        gulp.src("./index.html")
        .pipe(gulp.dest("./resd"))
    })
})

//监听index.html改变后，压缩各种类型代码
gulp.task("watch-change",async ()=>{
    gulp.watch("./index.html",async ()=>{
        gulp.src("./index.html")
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            collapseBooleanAttributes: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyJS: true,
            minifyCSS: true,
        }))
        .pipe(gulp.dest("./resd"))
    })

    //监听css文件
    //css下所有文件发生改变，都会让css文件夹下所有css文件压缩
    gulp.watch("./css/**/*",async ()=>{
        gulp.src("./css/**/*")
        .pipe(cssmin())
        .pipe(uglify())//这句话就是再进行压缩
        .pipe(gulp.dest("./resd"))
    })

    //合并
    //意思是，监听这俩路径的指定文件，如果发生改变，就合并它俩，
    //并且重新命名为 common.js,放到指定文件夹中
    gulp.watch(["./js/index.js","./js/goodList.js"],async ()=>{
        gulp.src(["./js/index.js","./js/goodList.js"])
        .pipe(concat("common.js"))
        .pipe(gulp.dest("./resd"))
    })



    //合并并重命名
    gulp.watch(["./js/index.js","./js/goodList.js"],async ()=>{
        gulp.src(["./js/index.js","./js/goodList.js"])
        .pipe(concat("common.js"))
        .pipe(uglify())
        .pipe(rename("common.min.js"))
        .pipe(gulp.dest("./resd"))
    })


    //还可以ES6转成ES5





    
})


//搭建服务器
gulp.task("server",async ()=>{
    connect.server({
        root:"./resd",
        livereload:true, 
    })
})


