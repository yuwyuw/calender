<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="renderer" content="webkit"/>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="blank">
    <meta name="format-detection" content="telephone=no"/>
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <link rel="stylesheet" type="text/css" href="/statics/libs/fullcalendar/fullcalendar.min.css">
    <link rel="stylesheet" type="text/css" href="/statics/libs/fullcalendar/fullcalendar.css">
    <link rel="stylesheet" type="text/css" href="/statics/libs/fullcalendar/fullcalendar.print.css">
    <link rel="stylesheet" type="text/css" href="/statics/css/base.css">
    <link rel="stylesheet" type="text/css" href="/statics/css/pages/sys_plan.css">
    <title>信息服务部系统更新计划</title>
</head>
<?php

$data = [
    [
        'icon' => 'wechat',
        'intro' => '微信',
        'link' => '#wechat',
    ], [
        'icon' => 'list',
        'intro' => '报表',
        'link' => '#list',
    ], [
        'icon' => 'gdo',
        'intro' => 'GDO',
        'link' => 'javascript:;',
    ],  [
        'icon' => 'buy',
        'intro' => '采购',
        'link' => 'javascript:;',
    ],  [
        'icon' => 'sms',
        'intro' => 'CNSMS',
        'link' => 'javascript:;',
    ],  [
        'icon' => 'oa',
        'intro' => 'OA',
        'link' => 'javascript:;',
    ],  [
        'icon' => 'crm',
        'intro' => 'CRM',
        'link' => 'javascript:;',
    ],  [
        'icon' => 'wms',
        'intro' => 'WMS',
        'link' => 'javascript:;',
    ],  [
        'icon' => 'about',
        'intro' => '网站相关',
        'link' => 'javascript:;',
    ],  [
        'icon' => 'other',
        'intro' => '其他',
        'link' => 'javascript:;',
    ]
]
?>

<body>
    <div class="container-sys-plan clearfix">
        <h5 class="title">
            <span class="mark"></span>
            <span class="intro">信息服务部系统更新计划</span>
        </h5>
        <div class="fullcalendar-warp">
            <div class="calendar"></div>
        </div>
        <div class="sys-list">
            <div class="head">
                <i class="icon-sys"></i>系统
            </div>
            <ul class="body">
                <?php foreach($data as $key => $value):?>
                <li>
                    <a href="<?=$value['link'];?>">
                        <i class="icon-<?=$value['icon'];?>"></i>
                        <span class="intro"><?=$value['intro'];?></span>
                    </a>
                </li>
                <?php endforeach;?>
            </ul>
        </div>
    </div>
    <div class="type-list-warp">
        <div class="type-list" id="wechat">
            <span class="title">
                <span class="intro">微信内容如下：</span>
            </span>
            <ul>
                <p><a href="javascript:;">Last 30 Days</a></p>
                <li><a href="javascript:;">1.myherlife官网</a></li>
                <li><a href="javascript:;">2.微信</a></li>
            </ul>
            <ul>
                <p>Coming Soon</p>
                <li><a href="javascript:;">暂无</a></li>
            </ul>
        </div>
        <div class="type-list" id="list">
            <span class="title">
                <span class="intro">报表内容如下：</span>
            </span>
            <ul>
                <p><a href="javascript:;">Last 30 Days</a></p>
                <li><a href="javascript:;">1.myherlife官网</a></li>
                <li><a href="javascript:;">2.微信</a></li>
            </ul>
            <ul>
                <p>Coming Soon</p>
                <li><a href="javascript:;">暂无</a></li>
            </ul>
        </div>
    </div>
    <script src='/statics/libs/fullcalendar/jquery-1.7.2.min.js'></script>
    <script src='/statics/libs/fullcalendar/fullcalendar.min.js'></script>
    <script src='/statics/js/pages/sys_plan.js'></script>
    <script>

    </script>
    </script>
</body>
</html>
