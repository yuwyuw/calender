## 运行项目步骤
#### 1、安装依赖 npm install

#### 2、运行项目 npm start

#### 3、配置本地nginx服务器(示例)
```
 server {
    listen 80;
    server_name local.calender.com;
    root "/Users/yuwei/yuw-project/calender/public";
    index index.php;
    access_log  /tmp/access.log;
    error_log /tmp/error.log;
    try_files       $uri /index.php$is_args$query_string;
    location ~ \.php$ {
        try_files                   $uri = 404;
        fastcgi_split_path_info     ^(.+\.php)(/.+)$;
        fastcgi_connect_timeout     30s;
        fastcgi_read_timeout        100s;
        fastcgi_pass                127.0.0.1:9000;
        fastcgi_param               SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        fastcgi_param               SCRIPT_NAME $fastcgi_script_name;
        include                     fastcgi_params;
    }
}
 ```
#### 4、配置本地host文件域名

#### 5、重启nginx服务器

## 日历插件API
 | 属性             | 描述                           | 默认值 |
 | -----           | -----                          | ----- |
 | minTdHeight     | 设置日历中日期的最小高度           | '60'   |
 | swithBtn        | 是否显示日历头部中的左右切换按钮    |  true
 | eventListData   | 设置日程数据                     |[<br>{<br>'title':'标题',<br>'date': '2018-06-07',<br>'url': 'https://baidu.com',<br> 'isNewWindow': false<br>}<br>] |

