<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/13 0013
 * Time: 下午 3:43
 */
header('Content-Type:text/json;charset=utf-8');
$username = $_GET['username'];
$password = $_GET['password'];
//$phonenumber = $_GET['phonenumber'];

$arr = json_decode( file_get_contents('../JSON/user.json') );
$flag=false;

for($i=0;$i<sizeof($arr);$i++)
{
    if($password==$arr[$i]->password&&$username==$arr[$i]->username)
    {
        $flag=true;
    };
}

if($flag==true)
{
    echo json_encode(array('content'=>'登陆成功'));
}
else
{
    echo json_encode(array('content'=>'请核对用户名'));
}