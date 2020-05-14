<?php
    header("content-type:text/html;charset=utf-8");
    // 一、接收前端的数据
    $name = $_POST['username'];
    $pass = $_POST['userpass'];


    // 二、处理（连接数据库，进行查询）
    // 1、连接数据库
    // 1)、连接数据库的服务器
    $conn = mysqli_connect("localhost","root","root","dianshang");
    // 2）、选择数据库服务器上的数据库（名）
    

    // 2、执行sql语句
    // 执行查询语句的返回值是个表格
    $result = mysqli_query($conn,"select * from vip where username='{$name}' and userpass='{$pass}'");

    // 3、关闭数据库
    mysqli_close($conn);



    // 三、响应结果
    // 根据$result(表格)里的行数，来确定是否登录成功
    // mysql_num_rows():能够获取到查询结果的行数
    $arr = mysqli_fetch_all($result,MYSQL_ASSOC);

    if(count($arr)==1){
        echo "1";
    }else{
        echo "0";
    }
    
?>