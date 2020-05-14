
    //保存登录的cookie
    function getUserName() {
        let username=getCookie("username")
        if(username){
            $("#cookie-plus").css("display","block"),
            $(".fr li:first").css("display","none"),
            $("#userSpan").html(username)
            
        }else {
            $("#cookie-plus").css("display","none"),
            $(".fr li:first").css("display","block");
        }
    }


    //从后端获取所有商品
    function getGoods(){
        $.get("./php/getGoodsList.php",function(data){
            showData(data)
        },"json")
    }

    //显示商品
    function showData(data){
        console.log(data)
        let htmlStr = ""
        data.forEach(item => {
            htmlStr +=`
            <li>
                <div class="goods-img">
                    <a href="goodsDetails.html?goodsId=${item.goodsId}"> <img src="${item.goodsImg}" alt="" class="all-img"></a>
                </div>
                <div class="goods-price">
                    <i>￥</i><em>${item.goodsPrice}.00</em>
                </div>
                <div class="goods-name">
                    <a href="goodsDetails.html?goodsId=${item.goodsId}">${item.beiyong3}</a>
                </div>
                <div class="goods-all-count"><a href=''>14万</a>+评论</div>
                <div class="goods-shop">
                    <span class="goods-shop-name">
                        <a href="goodsDetails.html?goodsId=${item.goodsId}" class="goods-shop-link">TCL电视京东自营旗舰店</a>
                        <b class="im-02"></b>
                    </span>
                </div>
                <div class="goods-icon">
                    <i class="goods-icon-content">自营</i>
                </div>
                <div class="goods-operate">
                    <a href="" class="g-o-btn">
                        <i></i>对比
                    </a>
                    <a href="" class="g-o-btn focus">
                        <i></i>关注
                    </a>
                    <a href="" class="g-o-btn addCart">
                        <i></i>加入购物车
                    </a>
                    
                </div>
            </li>
            `
        });

        $(".goods-wrap").html(htmlStr)
    }












    $(function(){
        
        getUserName()
        getGoods()
    })