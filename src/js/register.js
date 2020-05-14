let isRight = [0,0,0]


//用户密码输入 未按要求输入，会错误

function isUser(){
    //非数字开头，并且6-16位
    var reg = /^[_a-zA-Z]\w{5,16}$/
    if(reg.test($("#userId").val())){
        $("#userId")[0].nextElementSibling.style.color="green"
        $("#userId")[0].nextElementSibling.innerHTML="√，格式创建正确"
        isRight[0]=1;
        
        
    }else{
        $("#userId")[0].nextElementSibling.style.color="red"
        $("#userId")[0].nextElementSibling.innerHTML="×，请按格式重新输入"
        isRight[0]=0
        return false
    }
}
function isPass(){
    //数字、字母、下划线组成，并且6-16位
    var reg = /^[\da-zA-Z]{6,16}$/
    if(reg.test($("#userPass").val())){
        $("#userPass")[0].nextElementSibling.innerHTML="√，密码创建正确"
        isRight[1]=1;
    }else{
        $("#userPass")[0].nextElementSibling.innerHTML="×，请按要求重新输入"
        isRight[1]=0
    }        
}
function isPass2(){
    //数字、字母、下划线组成，并且6-16位
    var reg = /^[\da-zA-Z]{6,16}$/
    //保证重复密码符合密码的规范

    if(reg.test($("#userRePass").val())){
        $("#userRePass")[0].nextElementSibling.innerHTML="√，创建正确"
        isRight[2]=1;
    }else{
        $("#userRePass")[0].nextElementSibling.innerHTML="×，请按要求重新输入"
        isRight[2]=0
        return
    }

    if($("#userPass").val()==$("#userRePass").val()){
        $("#userRePass")[0].nextElementSibling.innerHTML="√，创建正确"
        isRight[2]=1;
    }else{
        $("#userRePass")[0].nextElementSibling.innerHTML="×，请按要求重新输入"
        isRight[2]=0
    }
}



$("#userId").blur(function(){
    isUser()
    if(isUser()==false){
        return
    }
    $.get("./php/checkUser.php",{"username":this.value},(str)=>{
        //str是后端响应回来的数值
        if(str=="1"){
            this.nextElementSibling.style.color="red"
            this.nextElementSibling.innerHTML = "抱歉，该用户名已被注册"
        }else if(str=="0"){
            this.nextElementSibling.style.color="green"
            this.nextElementSibling.innerHTML = "恭喜，该用户名未被注册"

        }
    })
})
$("#userPass").blur(function(){
    isPass()
})
$("#userRePass").blur(function(){
    isPass2()
})


//表单提交时触发
$("#form-sub").submit(function(event){
    let sum=0
    isRight.forEach(function(item){
        sum+=item
    })


    //1.保证前端验证正确
    if(sum==3){
       //2.正确让其提交 
    }else{
        let e = event ||window.event
        //阻止事件的默认行为(阻止提交)
        e.preventDefault();
    }
    
})


//点击注册时触发
$(".step-next").click(function(){
    if($("#userId").val()==""){
        // $("#userId")[0].nextElementSibling.innerHTML="用户名不能为空"
        alert("用户名不能为空")
        return
    }
    if($("#userPass").val()==""){
        // $("#userId")[0].nextElementSibling.innerHTML="用户名不能为空"
        alert("密码不能为空")
        return
    }
    if($("#userRePass").val()==""){
        alert("重复密码不能为空")
    }
    if(isUser()==false){
        return
    }
    
    let sum=0
    isRight.forEach(function(item){
        sum+=item
    })


    //1.保证前端验证正确
    if(sum==3){
       //2.正确让其提交 
    }else{
        return
    }

    $.post("./php/regSave.php",{
        "username":$("#userId").val(),
        "userpass":$("#userPass").val(),
    },function(str){
        console.log(str)
        if(str=="1"){
            $("#message-box").html("注册成功！请<a href='login.html'>登录</a>").css({
                "color":"green"
            })
        }else if(str=="0"){
            $("#message-box").html("注册失败，请按正确方式注册").css({
                "color":"red"
            })

        }
    })
})