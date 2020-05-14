    class Swiper{
        constructor(selector,obj){
            this.$box = $(selector)
            // this.$imgBox = this.$box.find("#img-box")
            this.$imgBox = this.$box.find("#img-box")
            this.$img = this.$imgBox.children()
            this.$li = this.$box.find("li");
            this.$span = this.$box.find("span")
            this.$leftArrow = this.$span.eq(0)
            this.$rightArrow = this.$span.eq(1)
    
    
    
            let width = this.$box.width()
            let height = this.$box.height()
            let defaultObj = {
                width:width,
                hight:height,
                douWidth:10,
                douHeight:10,
                isCircle:true,
                douColor:"rgba(255,255,255,.4)",
                douHighColor:"white",
                ord:0,
                timelong:4000,
                myTimer:null,
                type:"side",
                hrefs:[],
                // background: rgba(255,255,255,.4);
            }
    
    
            if(obj){
                for(let key in obj){
                    defaultObj[key] = obj[key]    
                }
            }
            
            for(let key in defaultObj){
                this[key] = defaultObj[key]
            }
    
            this.render()
            this.addEvent()
            this.autoPlay()
    
    
    
    
    
    
    
        }
    
        render(){
            //这个方法存储着元素的样式
    
            //1.图片的样式
            //2.豆豆的样式
            // this.$li.css({
            //     "float": "left",
            //     "margin-top": "5px",
            //     "margin-left": "10px",
            //     "width":this.douWidth+"px",
            //     "height":this.douHeight+"px",
            //     "background-color":this.douColor,
                
            // })
            // this.$img.css({
            //     "position":"absolute",
            //     "left":"0",
            //     "top":0,
            // })
            
               
            
            if(this.isCircle){
                this.$li.css({
                    "border-radius":"50%"
                })
            }
            this.$li.eq(0).css({
                "background-color":this.douHighColor
            })
            //3.箭头的样式
    
    
    
    
    
    
    
    
        }
        goImg(transOrd){
            if(this.ord == transOrd){
                return
            }
            //一、数据处理
            //1.数据计算
            let outOrd = this.ord;
            this.ord = transOrd;
            //2.边界的合法性
            if(this.ord>this.$img.length-1){
                this.ord = 0
            }else if(this.ord<0){
                this.ord = this.$img.length-1
            }
    
            //二、外观呈现
            //1、图片的滑动
           // this.$img.eq(outOrd).animate({
            //     "left":-this.width
            // },this.timelong/3)
            
    
    
            this.$img.eq(outOrd).animate({"opacity":0},this.timelong/3);
            this.$img.eq(this.ord).animate({"opacity":1},this.timelong/3);    
            
    
    
            // this.$img.eq(this.ord).css({"left":this.width})
            // this.$img.eq(this.ord).animate({"left":0},this.timelong/3)
    
            //2.豆豆颜色的变化
            this.$li.css({"background":this.douColor,
            "width": "8px",
            "height": "8px",
            "margin-right": "4px",
            "border": "1px solid rgba(0,0,0,.1)",
            "position":"static"
            })
            this.$li.eq(outOrd).css({"background":this.douColor,
            
            })
            this.$li.eq(this.ord).css({
                "background":this.douHighColor,
                width: "9px",
                height: "9px",
                "position": "relative",
                top: "-3px",
                left: 0,
                "border": "3px solid rgba(0,0,0,.1)",
            })
    
    
    
    
        }
        // 停止播放
        stopPlay(){
            window.clearInterval(this.myTimer);
            this.myTimer = null;
        }

        autoPlay(){
            if(this.myTimer != null){
                stopPlay()
                return
            }
    
            this.myTimer = setInterval(()=>{
                this.goImg(this.ord+1);
            },this.timelong);
            console.log(this.myTimer)
        }
    
        
    
        addEvent(){
            //存储着添加的方法
    
            // 输入移入停止播放
            //  this.$box.mouseover(()=>{
            //     this.stopPlay();
            // });
            
            this.$imgBox.mouseover(()=>{
                this.stopPlay();
            });
            // 输入离开继续播放
            this.$imgBox.mouseout(()=>{
                this.autoPlay();
            });
           
            // this.$box.mouseout(()=>{
            //     this.autoPlay();
            // });
            //点击豆豆进行切换图片
            this.$li.click((event)=>{
                this.stopPlay()
               this.goImg($(event.target).index())
            })
            //点击左右箭头进行切换图片
            this.$leftArrow.click(()=>{
                this.stopPlay();
                this.goImg(this.ord-1)
    
            })
            this.$rightArrow.click(()=>{
                this.stopPlay();
                this.goImg(this.ord+1)
    
            })
            //点击盒子进行超链接
            this.$imgBox.click(()=>{
                this.hrefs[this.ord]  && window.open(this.hrefs[this.ord])
                //如果超链接数组有内容才会开启超链接
            })
            //网页离开焦点停止播放，获取焦点开始播放
            // window.onblur = ()=>{
            //     this.stopPlay()
            //     this.myTimer = null
            // }
            // $(window).blur = ()=>{
            //     this.stopPlay()
            //     this.myTimer = null
            // }
            // $(window).focus = ()=>{
            //     this.autoPlay()
            // }
            // window.onfocus = ()=>{
            //     this.autoPlay()
            // }
        }
    
    }
    
    
        
        $(".one-nav-content>li").mouseover(function () {
    
            $(".two-nav").css({
                "display": "block"
            })
        })
        $(".one-nav-content>li").mouseout(function () {
    
            $(".two-nav").css({
                "display": "none"
            })
        })
        $(".two-nav").mouseover(function () {
    
            $(".two-nav").css({
                "display": "block"
            })
        })
        $(".two-nav").mouseout(function () {
    
            $(".two-nav").css({
                "display": "none"
            })
        })
    
    
    
    
    
        //保存登录的cookie
        function getUserName() {
            let username=getCookie("username")
            if(username){
                $(".cookie-plus").show()
                $(".fr li:first").hide()
                $("#login-reg a").hide()
                $("#login-reg p").hide()
                $(".cookie-reg").show()
                $(".userSpan").html(username)
                
            }else {
                $(".cookie-reg").hide()
                $(".cookie-plus").hide(),
                $(".fr li:first").show();
            }
        }
    
    
    
        //从后端获取所有的商品
        function getData(){
            $.get("./php/getGoodsList.php",function(data){
                showData(data)
            },"json")
        }
     
        //显示商品
        function showData(data){
            let htmlStr =""
            let count=0
            data.forEach(item => {
                console.log(item)
                console.log(item.goodsImg)
                count++
                if(count>=3){
                    htmlStr+=`
                    <div class="J_chang_item J_chang_item${count+0}">
                        <a href="" class="J_chang_item_title">
                            <span class="channels_item_title_main">Joy寻宝</span>
                            <span class="channels_item_title_aside">懂你的Joy</span>
                        </a>
                        <div class="J_chang_item_imgs">
                            <a href="" class="J_chang_item_imgs-link">
                                <div class="lazyimg-img-box">
                                    <img class="lazying-img" src="${item.goodsImg}" alt="">
                                </div>
                            </a>
                            <a href="" class="J_chang_item_imgs-link">
                                <div class="lazyimg-img-box">
                                    <img src="${item.goodsImg}">
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    `
                }else{
                    htmlStr+=`
                    <div class="J_chang_item J_chang_item${count+0}">
                        <a class="J_chang_item_link" href="./goodsDetails.html?goodsId=${item.goodsId}" >
                            <div class="lazyimg-img-box">
                                <img src="${item.goodsImg}" alt="" class="lazyimg-img">
                            </div>
                        </a>
                    </div>
                    `
                }


                
                
            });
            $(".J_chang_main-box").html(htmlStr)
        }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        $(function(){
            new Swiper("#banner")
            getUserName()
            getData()

            //点击注销，除去cookie，并且再次运行获取cookie函数
            $("#btnLogoOut").click(function(){
                removeCookie("username")
                getUserName()
            })
            $(".btnReg").click(function(){
                location.href="register.html"
            })
        })
    
    