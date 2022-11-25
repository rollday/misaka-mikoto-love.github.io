<?php

header("content-type:text/html;charset='utf-8'");
error_reporting(0);

$page = $_GET['page'];
if($page == 'one'){
    $data = '111';
}else if($page == 'two'){
    $data = '222';
}else if($page == 'three'){
    $data = '333';
}

echo "{$data}";