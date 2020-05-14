//获取购物车的数据

function shoopping(){
    $.get("./php/getShoppingCart.php",{"vipName":"宋宝宝"},function(datas){
        let htmlStr = ""
        datas.forEach(goods => {
            
        });
    },"json")
}