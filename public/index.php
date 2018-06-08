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
    <title>日程表</title>
    <link rel="stylesheet" type="text/css" href="/statics/css/base.css">
    <link rel="stylesheet" type="text/css" href="/statics/css/pages/calender.css">
    <script src='/statics/libs/fullcalendar/jquery-1.7.2.min.js'></script>
    <script src='/statics/js/pages/calender.js'></script>
</head>
<body>
    <div class="container-sys-plan">
        <div class="calendar-warp">
            <div class="calender"></div>
        </div>
    </div>
</body>
<script type="text/javascript">
    $(document).ready(function () {
        let eventListData = [
            {
                'title': '粗去浪',
                'date': '2018-6-07',
                'url': 'http://baidu.com',
                'isNewWindow': true,
            }, {
                'title': '粗去浪',
                'date': '2018-06-07',
                'url': 'http://baidu.com',
            }, {
                'title': '粗去浪',
                'date': '2018-06-7',
            }, {
                'title': '粗去浪',
                'date': '2018-06-9',
            }, {
                'title': '在家宅',
                'date': '2018-6-7',
            }, {
                'title': '吃好吃的',
                'date': '2018-05-07',
            }, {
                'title': '吃好吃的',
                'date': '2018-5-4',
            }
        ];
        $('.calender').calender({
            'eventListData': eventListData,
            'minTdHeight': 80,
            'swithBtn': true
        });
    })
</script>
</html>
