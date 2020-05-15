//获取购物车数据
function getShoppingCar(cb){
    let username=getCookie("username")//记得修改cookie
    $.get("./php/getShoppingCart.php",{"vipName":"宋宝宝"},function(datas){
        let htmlStr=`
        <div class="item-list">
            <div class="item-list-title">
                <div class="discout">满减
                    <b></b>
                </div> 
            </div>
        `;
        datas.forEach(goods => {
            htmlStr+=`
            <div class="item-list-body clearfix">
                    <div class="item-form clearfix">
                        <input type="checkbox" name="" class="item-form-check">
                        <div class="cell p-goods">
                            <div class="p-goods-box">
                                <div class="p-goods-img">
                                    <img src="${goods.goodsImg}" alt="">
                                </div>
                                <div class="p-goods-msg">
                                    <div class="p-name">
                                        TCL 65V6 65英寸液晶电视机 4K超高清护眼 超薄 全面屏 人工智能 智慧屏 玩转语音操控 教育电视
                                    </div>
                                    <div class="p-promise">
                                        <i class="Jd-service-icon"></i>
                                        选服务
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cell p-props">
                            <p class="p-txt">65英寸AI声控全面屏-V6</p>
                            <p class="p-num">1</p>
                        </div>
                        <div class="cell p-price">
                            <p class="commodity-price">￥${goods.goodsPrice}</p>
                            <div class="promotion">
                                促销
                                <i class="iconfont icon-xiangxia1"></i>
                            </div>
                        </div>
                        <div class="cell p-quantity">
                            <div class="quantity-form">
                                <div class="reduceNum">-</div>
                                <input class="quantityCount" value="${goods.goodsCount}">
                                <div class="addNum">+</div>
                            </div>
                            <div class="quantity-cunhuo">有货</div>
                        </div>
                        <div class="cell p-sum">
                            <strong>￥${goods.goodsPrice*goods.goodsCount}</strong>
                        </div>
                        <div class="cell p-ops">
                            <div class="delete-goods">删除</div>
                            <div class="my-concerns">移到我的关注</div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            
                
        });
        $("#item-list-box").html(htmlStr)
        cb&&cb()
    },"json")
}


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

    function totalMoney(){
        let money = 0;
        // let $input = $(".guess-like :checkbox:gt(1)").not(".guess-like :checkbox:last()")
        // $input.each(function(){
        //     if($(this).find(":checkbox").prop("checked")){
        //         money += $(this).find()
        //     }
        // })
        let $input = $(".item-list")
        $input.each(function(){
            if($(this).find(":checkbox").prop("checked")){
                let priceString = $(this).find(".p-sum strong").html()
                let price =parseFloat(priceString.substr(1,priceString.length-1))
                money += price
            }
        })
        $(".cart-floot-settlement .price").html("￥"+money).css({
            "font-size": "16px",
            "color": "#E2231A",
            "font-weight": "700",
        })

    }


    //增加事件
    function addEvent(){
        $(".guess-like :checkbox:eq(0)").check($(".guess-like :checkbox:gt(0)"))
        $(".guess-like :checkbox:eq(1)").check($(".guess-like :checkbox:gt(0)"))
        $(".guess-like :checkbox:last()").check($(".guess-like :checkbox"))
        $(".addNum").click(function(){
            //计算数量
            let count = parseInt($(this).prev().val())
            count++
            $(this).prev().val(count);
            //计算单价
            let priceString = $(".addNum").parent().parent().parent().find(".p-price .commodity-price").html()
            let price =priceString.substr(1,priceString.length-1)
            //计算该商品总金额
            let money = price*count
            $(this).parent().parent().parent().find(".p-sum strong").html("￥"+money)
            //回馈到总金额
            totalMoney()
        })
        $(".reduceNum").click(function(){
            //计算数量
            let count = parseInt($(this).next().val())
            count--
            if(count<1){
                count=0
            }
            $(this).next().val(count);
            //计算单价
            let priceString = $(".addNum").parent().parent().parent().find(".p-price .commodity-price").html()
            let price =priceString.substr(1,priceString.length-1)
            //计算该商品总金额
            let money = price*count
            $(this).parent().parent().parent().find(".p-sum strong").html("￥"+money)
            //回馈到总金额
            totalMoney()
        })

        $(":checkbox").click(function(){
            totalMoney();
        });
    }


    $(function(){
        
        
        getUserName()
        getShoppingCar(addEvent)

        $(":checkbox").click(function(){
            totalMoney();
        });
    })