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
    //获取商品编号，获取商品信息
    function getData(goodsId,cb){
        if(goodsId==undefined){
            return
        }else{
           $.get("./php/getGoodsInfo.php","goodsId="+goodsId,function(data){
            showData(data,cb)
            },"json") 
        }
        
    }
    //显示商品信息
    function showData(data,cb){
        let htmlStr =`
        <div class="type-page clearfix">
            <!-- 预览 -->
            <div class="preview-box">
                <!-- 图片 -->
                <div class="preview-img-wrap">
                    <div class="preview-auto">
                        <span class="preview-auto-span"></span>
                    </div>
                    <img class="preview-img" src="${data.goodsImg}">
                </div>
                <!-- 选择图片 -->
                <div class="preview-list">
                    <div class="pre-leftArrow"></div>
                    <div class="pre-rightArrow"></div>
                    <div class="pre-content">
                        <div class="pre-imgBox">
                            <img src="https://img13.360buyimg.com/n5/jfs/t1/108463/12/11836/99018/5e8d6b21E8a4fa557/34ea7248f9c02260.jpg" alt="">
                            <img src="https://img13.360buyimg.com/n5/jfs/t1/87407/29/17213/441061/5e840e99E8d76d06e/b64356b21734cf9b.jpg" alt="">
                            <img src="https://img13.360buyimg.com/n5/jfs/t1/106370/12/10009/189896/5e144965E9b3f6e33/67ed241874c5a975.jpg" alt="">
                            <img src="https://img13.360buyimg.com/n5/jfs/t1/87734/20/10153/219023/5e144966E755975e9/7e8218718303eda9.jpg" alt="">
                            <img src="https://img13.360buyimg.com/n5/jfs/t1/89903/6/9941/220317/5e144966Ec9e3bc81/9093d0a3c23671fd.jpg" alt="">
                        </div>
                    </div>
                </div>
                <!-- 关注、分享 -->
                <div class="preview-share clearfix">
                    <div class="pre-leftShare">
                        <a href="#" class="share-link"><i></i><em>关注</em></a>
                        <a href="#" class="share-link share-link2"><i></i><em>分享</em></a>
                        <a href="#" class="share-link share-link3"><i></i><em>对比</em></a>
                    </div>
                    <div class="per-rightShare">
                        <a href="">举报</a>
                    </div>
                </div>
            </div>
            <!-- 中间部分 -->
            <div class="iteminfo-wrap">
                <div class="goods-name">
                    ${data.goodsDesc}   
                </div>
                <div class="goods-news">
                    ${data.beiyong3} 
                    <a href="https://item.jd.com/100006429493.html" target="_blank">${data.beiyong4}</a>
                </div>
                <!-- 中间 京东价 -->
                <div class="goods-price-box">
                    <div class="goods-price-wrap">
                        <div class="goods-price">
                            <div class="dt">京 东 价</div>
                            <div class="dd">
                                <div class="g-price">
                                    <span>￥</span>
                                    <span class="g-price-font">${data.goodsPrice}</span>
                                </div>
                                <a href="" class="g-price-link">降价通知</a>
                            </div>
                        </div>
                        <!-- 累计评价 -->
                        <div class="evaluate">
                            <div class="evaluate-count float-left">
                                <p class="comment">累计评价</p>
                                <a class="count " href="#none">1.4万+</a>
                            </div>
                            <div class="evaluate-count float-left">
                                <p class="comment">选购指数</p>
                                <a class="count " href="#none">9.16</a>
                            </div>
                        </div>
                        
                    </div>
                    <!-- 促销 -->
                    <div class="promotion">
                        <div class="promotion-wrap">
                            <div class="dt">促　　销</div>
                            <div class="dd">
                                <div class="promotion-content">
                                    <div class="pro-item">
                                        <em class="hr_font_red">满减</em>
                                        <em class="hr_red">满1000元减200元</em>
                                    </div>
                                    <div class="pro-item">
                                        <em class="hr_font_red">换购</em>
                                        <em class="hr_font_red">满额返卷</em>
                                    </div>
                                    <div class="open-promotion">
                                        <span class="prom-sum">展开促销</span>
                                        <a href="#none" class="view-link">
                                            <i class="sprite-arr-down"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="goods-price">
                    <div class="dt">增值业务</div>
                    <div class="dd">
                        <i class="sprite-old2new"></i>
                        <a href="" class="g-price-link">家电回收，以旧换新</a>
                    </div>
                </div>
                <!-- 商城价 -->
                <div class="shop-price">
                    <div class="shop-price-wrap clearfix">
                        <div class="shop-price-logo"></div>
                        <div class="shop-price-content">
                            <div class="shop-price-floor">
                                <div class="shangchengjia">商城价</div>
                                <div class="g-price">
                                    <span class="">￥</span>
                                    <span class="g-price-font ">3199</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 配送 -->
                <div class="delivery">
                    <div class="goods-price clearfix">
                        <div class="dt">配送至</div>
                        <div class="dd">
                            <div class="stock clearfix">
                                <div class="stock-address">
                                    <div class="stock-address-wrap">
                                        <div class="stock-address-text-wrap">
                                            <div class="stock-address-text">湖南长沙市长沙县白沙镇</div>
                                            <b></b>
                                        </div>
                                    </div>
                                </div>
                                <span class="float-left">有货</span>
                            </div>
                        </div>
                    </div>
                    <div class="delivery-mode">
                        <li>支持</li>&nbsp;
                        
                        <li>货到付款</li>
                        <li class="spacer"></li>
                        <li>送货入户</li>
                        <li class="spacer"></li>
                        <li>配送延时补贴</li>
                        <li class="spacer"></li>
                        <li>30-30-180</li>
                        <span class="arrow"></span>
                    </div>
                    <div class="delivery-time li ">
                        
                        <div class="dt"></div>
                        <div class="dd">
                            由<span class="hr_red">京东</span> 发货, 并提供售后服务. 21:00前下单，预计<b>明日(05月10日)</b>送达
                        </div>
                    </div>
                    <div class="delivery-weight li">
                        <div class="dt">重    量</div>
                        <div class="dd">不计重</div>
                    </div>
                    <div class="choose-size clearfix">
                        <div class="dt">选择尺寸</div>
                        <div class="dd">w</div>
                    </div>
                    <!-- 增值保障 -->
                    <div class="guarantee clearfix">
                        <div class="dt">增值保障</div>
                        <div class="dd">
                            <div class="guarantee-choose clearfix">
                                <div class="ty-item-cart">
                                    <img src="https://img10.360buyimg.com//fuwu/jfs/t5431/52/1153921527/1119/b6e6fbf5/590c0c85N460e4552.png" alt="" class="icon">
                                    <span class="name">4年全保修</span>
                                    <span class="price">￥209</span>
                                    <div class="arrow"></div>
                                
                                </div>
                                <div class="ty-item-cart">
                                    <img src="https://img14.360buyimg.com//fuwu/jfs/t7258/334/384584716/1313/a055eace/5992a59bNd253524f.png" alt="" class="icon">
                                    <span class="name">4年全保修</span>
                                    <span class="price">￥209</span>
                                    <div class="arrow"></div>
                                
                                </div>
                                <div class="ty-item-cart">
                                    <img src="https://img13.360buyimg.com//fuwu/jfs/t2083/278/1782000835/1227/e5dadbca/567cb046Ncc8f504a.png" alt="" class="icon">
                                    <span class="name">4年全保修</span>
                                    <span class="price">￥209</span>
                                    <div class="arrow"></div>
                                
                                </div>
                                <div class="service-tips">
                                    <a href="">
                                        <i class="service-question"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 京东服务 -->
                    <div class="Jd-service clearfix">
                        <div class="dt">京东服务</div>
                        <div class="dd">
                            <div class="guarantee-choose clearfix">
                                <div class="ty-item-cart">
                                    <img src="https://img10.360buyimg.com//fuwu/jfs/t5431/52/1153921527/1119/b6e6fbf5/590c0c85N460e4552.png" alt="" class="icon">
                                    <span class="name">4年全保修</span>
                                    <span class="price">￥209</span>
                                    <div class="arrow"></div>
                                </div>
                                <div class="service-tips">
                                    <a href="">
                                        <i class="service-question"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 白条分期 -->
                    <div class="Jd-baitiao clearfix">
                        <div class="dt">白条分期</div>
                        <div class="dd">
                            <div class="guarantee-choose clearfix">
                                <div class="ty-item-cart">
                                    <img src="https://img10.360buyimg.com//fuwu/jfs/t5431/52/1153921527/1119/b6e6fbf5/590c0c85N460e4552.png" alt="" class="icon">
                                    <span class="name">4年全保修</span>
                                    <span class="price">￥209</span>
                                    <div class="arrow"></div>
                                </div>
                                <div class="service-tips">
                                    <a href="">
                                        <i class="service-question"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="summary-line"></div>
                    <!-- 选择数量-购物车 -->
                    <div class="choose-btns clearfix">
                        <div class="choose-count ">
                            <input type="text" class="choose-count-text" value="1">
                            <div class="btn-reduce">-</div>
                            <div class="btn-add">+</div>
                        </div>
                        <div  class="btn-lg" >抢购</div>
                        
                    </div>
                </div>

        `
        let p_user_name =`
        <a  href="goodsDetails.html?goodsId=${data.goodsId}">${data.goodsName}</a>
        `

        $(".product-info").html(htmlStr)
        $(".sub-menu-list .p-user-name").html(p_user_name)

        cb&&cb()
   
    }


    //把指定商品添加到购物车
    function addShoppingCar(goodsId){
        let username=getCookie("username")
        $.post("./php/addShoppingCart.php",{
            "vipName":username,
            "goodsId":goodsId,
            "goodsCount":$(".choose-count-text").val(),
        },(data)=>{
            if(data=="0"){
                alert("添加失败")
            }else if(data=="1"){
                alert("添加成功")
                //点击进入购物车结算，到时候这里加一个是否进入购物车页面的点击效果
                // $(".btn-lg").click(function(){
                //     location.href="shopping.html"
                // })
            }else{
                alert("服务器错误")
            }
        })
    }

    

    function addClick(){
        //点击加入购物车
        $(".btn-lg").click(function(){
            let goodsId = location.search.split("=")[1]
            addShoppingCar(goodsId)
        })
        //点击数量增加
        $(".btn-add").click(function(){
            let count =parseInt($(".choose-count-text").val())
            count++
            $(".choose-count-text").val(count++)
        })
        //点击数量减少
        $(".btn-reduce").click(function(){
            let count =parseInt($(".choose-count-text").val())
            count--
            if(count<=0){
                count=0
            }
            $(".choose-count-text").val(count--)
        })

        //点击进入购物车结算，到时候这里加一个是否进入购物车页面的点击效果
        //京东是直接点击抢购就添加并且跳转到购物车页面，这个也没错，不过可以继续完善
        // $(".btn-lg").click(function(){
        //     location.href="shopping.html"
        // })


    }




    //加载完成后调用
    $(function(){
        let goodsId = location.search.split("=")[1]
        //获取cookie
        getUserName()
        //根据商品ID获取信息，然后放置在页面中
        getData(goodsId,addClick)
        //解决异步  加载点击效果
        addClick()
    })


    
                


        
