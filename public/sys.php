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
    <link rel="stylesheet" type="text/css" href="/statics/css/base.css">
    <link rel="stylesheet" type="text/css" href="/statics/css/pages/calender.css">
    <link rel="stylesheet" type="text/css" href="/statics/css/pages/sys_plan.css">
    <script src='/statics/libs/fullcalendar/jquery-1.7.2.min.js'></script>
    <script src='/statics/js/pages/calender-events.js'></script>
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
        'link' => '#gdo',
    ],  [
        'icon' => 'buy',
        'intro' => '莱购',
        'link' => '#buy',
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
        <h5 class="sys-title">
            <span class="mark"></span>
            <span class="intro">信息服务部系统更新计划</span>
        </h5>
        <div class="fullcalendar-warp">
            <div class="calender" id="calender"></div>
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
                <p>Last 30 Days</p>
                <li><a href="javascript:;">1.OA</a></li>
                <li><a href="javascript:;">2.myherlife官网</a></li>
                <li><a href="javascript:;">3.微信</a></li>
            </ul>
            <ul>
                <p>Coming Soon</p>
                <li><a href="javascript:;">暂无</a></li>
            </ul>
            <ul>
                <p>Training</p>
            </ul>
        </div>
        <div class="type-list" id="gdo">
            <span class="title">
                <span class="intro">GDO内容如下：</span>
            </span>
            <ul>
                <p>Last 30 Days</p>
                <li><a href="javascript:;">1.OA</a></li>
                <li><a href="javascript:;">2.myherlife官网</a></li>
                <li><a href="javascript:;">3.微信</a></li>
            </ul>
            <ul>
                <p>Coming Soon</p>
            </ul>
        </div>
        <div class="type-list" id="buy">
            <span class="title">
                <span class="intro">莱购内容如下：</span>
            </span>
            <ul>
                <p>Last 30 Days</p>
            </ul>
            <ul>
                <p>Coming Soon</p>
            </ul>
        </div>
    </div>
    <script type="text/javascript">
        /*
            let eventListData = [
                {
                    'icon': 'wechat',
                    'title': '微信',
                    'day': '5', day表示天数，取值范围[1-31]
                    'url': '#wechat'
                }
            ]

            icon = [
                {'icon': 'wechat', 'text': '微信'},
                {'icon': 'report', 'text': '报表'},
                {'icon': 'gdo', 'text': 'GDO'},
                {'icon': 'other', 'text': '其他'},
                {'icon': 'laigou', 'text': '莱购'},
                {'icon': 'oa', 'text': 'OA'},
                {'icon': 'crm', 'text': 'CRM'},
                {'icon': 'wms', 'text': 'WMS'},
                {'icon': 'website', 'text': '网站相关'},
                {'icon': 'cnsms', 'text': 'CNSMS'},

            ]

            $('.calender').calender({
                'selectTime': '2018-05', //'2018-06',日期格式为：yyyy-mm
                'eventListData': eventListData, //数据
                'prevLink': 'https://baidu.com', // 上一页
                'nextLink': 'https://baidu.com', // 下一页
            });
        */
        let eventListData = [
            {
                'icon': 'wechat',
                'title': '微信',
                'day': '5',
                'url': '#wechat'
            }, {
                'icon': 'report',
                'title': '报表',
                'url': '#list',
                'day': '5'
            }, {
                'icon': 'gdo',
                'title': 'GDO',
                'day': '5'
            }, {
                'icon': 'other',
                'title': '其他',
                'day': '5'
            }, {
                'icon': 'laigou',
                'title': '莱购',
                'day': '5'
            }, {
                'icon': 'oa',
                'title': 'OA',
                'day': '5'
            },  {
                'icon': 'crm',
                'title': 'CRM',
                'day': '5'
            },  {
                'icon': 'wms',
                'title': 'WMS',
                'day': '5'
            },  {
                'icon': 'website',
                'title': '网站相关',
                'day': '10'
            },  {
                'icon': 'cnsms',
                'title': 'CNSMS',
                'day': '5'
            }, {
                'icon': 'website',
                'title': '网站相关',
                'day': '10'
            },  {
                'icon': 'cnsms',
                'title': 'CNSMS',
                'day': '10'
            }
        ];
        $('.calender').calender({
            // 'selectTime': '2018-06',日期格式为：yyyy-mm
            'selectTime': '2018-06',
            'eventListData': eventListData,
            'prevLink': 'https://baidu.com',
            'nextLink': 'https://baidu.com',
        });
    </script>
</body>
</html>
