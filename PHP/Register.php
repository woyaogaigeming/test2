<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/12 0012
 * Time: 上午 11:37
 */

header('Content-Type:text/json;charset=utf-8');
$username = $_GET['username'];
$password = $_GET['password'];
$phonenumber = $_GET['phonenumber'];

if(!file_exists('../JSON/user.json')){
    $arr = array();
}else{
    $arr = json_decode( file_get_contents('../JSON/user.json') );
}

class Person{
    public $username;
    public $password;
    public $phonenumber;
}

$person = new Person();
$person->username = $username;
$person->password = $password;
$person->phonenumber = $phonenumber;

$exist = false;

foreach($arr as $item){
    if($item->username == $username){
        $exist = true;
        //程序到此结束
        die( json_encode(array('content'=>'用户名存在')) );

    }
}
if($exist == false){
    //加入到数组
    array_push($arr,$person);
}

//保存到本地
if(file_put_contents('../JSON/user.json', json_encode($arr))){

    echo json_encode(array('content'=>'注册成功'));
}else{
    echo json_encode(array('content'=>'数据保存失败'));
}



