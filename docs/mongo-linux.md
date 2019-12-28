# mongo在linux中的种种问题
1. 启动mongod服务可以在配置文件中指定 fork=true，这样可以默认在后台开启
2. 如何关掉后台跑着的mongod服务？
    * 查看所有后台运行的服务 `lsof -i`，找到mongod的pid号
    * `kill yourpid`
    * 查看指定端口是否被占用 `lsof -i tcp:3000`