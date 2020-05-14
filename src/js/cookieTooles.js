



//key=键，value=值，count=有效期。


//增
// function addCookie(key, value, count) {
//     let d = new Date();
//     d.setDate(d.getDate() + count)

//     document.cookie = `${key}=${value};expires=${d.toGMTString()};`
// }


//旧的浏览器有中文的问题（乱码），加一个escape
function addCookie(key, value, count) {
    let d = new Date();
    d.setDate(d.getDate() + count)

    document.cookie = `${key}=${escape(value)};expires=${d.toGMTString()};`
}

//查

// function getCookie(key) {
//     let str = document.cookie
//     let arr = str.split("; ")   //用;空格  分隔成数组
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].indexOf(key+"=") == 0) {
//             // var value = arr[i].substring(key+"=".length)
//             return arr[i].substring(key.length+1)
//         }
//     }
//     return null
// }

//旧的浏览器有中文的问题（乱码），获取时需要使用unescape进行解码
function getCookie(key) {
    let str = unescape(document.cookie)
    let arr = str.split("; ")   //用;空格  分隔成数组
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(key+"=") == 0) {
            // var value = arr[i].substring(key+"=".length)
            return arr[i].substring(key.length+1)
        }
    }
    return null
}

//删除

// function removeCooke(key){

//     let d = new Date();
//     d.setDate(d.getDate() -1)

//     document.cookie = `${key}=shanchu;expires=${d.toGMTString()};`
// }

function removeCookie(key){
    addCookie(key,"shanchu",-1);
}
// function removeCookie(key){
//     addCookie(key,"byebye",-1);
// }

//修改



function updateCookie(key,value,count){
    addCookie(key,value,count);
}

//给修改添加一个功能，得到是否修改成功
// function updateCookie2(key,value,count){
//     //1.先查询是否存在
//     let value = getCookie(key);
//     if(value==null){
//         return false;
//     }
//     //2.添加
//     addCookie(key,value,count); 
//     return true;
// }