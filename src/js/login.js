
    $(".login-tab-l").click(()=>{
        $(".login_reg").css("display","none")
        $(".qr_code").css("display","block")
    })
    $(".login-tab-r").click(()=>{
        $(".login_reg").css("display","block")
        $(".qr_code").css("display","none")
    })





    $(".dengl").click(function(){
    $.post("./php/loginCheck.php",{
        "username":$("#loginname").val(),
        "userpass":$("#loginpass").val(),
    },function(str){
        // addCookie("username",$("username").value,7)
        addCookie("username",$("#loginname").val(),7)
        if($("#loginname").val()==""){
            alert("用户名不得为空")
            return}
        // }else if($("#loginpass").val()=""){
        //     alert("密码不得为空")
        //     return
        // }   
        if($("#loginpass").val()==""){
            alert("密码不得为空")
            return
        }
        if(str=="1"){
            let count = 6
            let myTimes = setInterval(() => {
                count--
                if(count==0){
                    window.clearInterval(myTimes)
                    location.href="index.html"
                    return
                }
                $(".login-reg-white").html(`登录成功！${count}秒后，自动跳转到&nbsp;<a href='index.html'>首页</a>`).css({
                    "font-size":"16px",
                    "color":"green",
                })
            }, 1000);
            
        }else if(str=="0"){
            $(".login-reg-white").css({
                "border": "1px solid #faccc6",
                "background": "#ffebeb",
            })
            $(".login-reg-white").html("<b></b>账户名与密码不匹配，请重新输入<br>如需海外手机登录请添加 国际区号").css({
                "color":"red"
            })

        }
    })
})