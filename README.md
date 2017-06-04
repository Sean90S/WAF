WAF Web
1. Admin site
2. Service


>提醒: 确保是最新的`Node.js` 和 `npm`


```bash
$ git clone http://192.168.1.201/sec-dev/waf-web.git waf-web

$ cd waf-web

#建议使用淘宝镜像 cnpm，安装更快！
$ npm install 
```

## 启动数据 mock sever
```bash
# 启动 mock 服务
$ npm run api
```

数据 `mock` 使用 `json-server` 作为 `JSON` 服务器,采用 `fake.js` 生成随机数据。

具体用法参照官方API：

 [https://github.com/typicode/json-server](https://github.com/typicode/json-server) 
 
 
 [https://github.com/marak/Faker.js/]( [https://github.com/marak/Faker.js/]) 
 

## 运行开发环境
```
# 启动
$ npm start
```

浏览器访问 [http://localhost:8080](http://localhost:8080) 

## 发布
```bash
$ npm run build
```

生成 `dist` 目录，发布到生产环境web服务器下即可。