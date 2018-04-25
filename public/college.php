<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'views/head.php'; ?>
    <title>小康大学</title>
    <link rel="stylesheet" type="text/css" href="statics/css/pages/college.css">
</head>
<body>
    <?php
        $data = [
            [
                'icon' => 'news',
                'title' => '公司资讯'
            ], [
                'icon' => 'sale',
                'title' => '促销信息'
            ], [
                'icon' => 'story',
                'title' => '人物故事'
            ], [
                'icon' => 'prod',
                'title' => '产品介绍'
            ], [
                'icon' => 'tool',
                'title' => '新工具',
            ]
        ];
    ?>
    <section class="header tc">头部搜索</section>
    <section class="list-warp">
        <?php foreach($data as $key => $value):?>
        <dl>
            <a href="/detail_college.php">
                <dt>
                    <i class="icon icon-<?=$value['icon'];?>"></i>
                </dt>
                <dd><?php echo $value['title'];?></dd>
            </a>
        </dl>
        <?php endforeach;?>
    </section>
</body>
</html>
