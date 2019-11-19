# mongodb

## 1. 如果本地已经安装过

brew查看是否已安装，前提是当初通过brew安装的
> brew list

启动数据库：（后面的地址是通过brew安装时的默认文件地址）
> `mongod --config /usr/local/etc/mongod.conf`

阿斯蒂芬

进入数据库：
>`mongo`

## 2. Mac上通过brew安装

更新brew
>`brew update` 

安装mongodb
>`brew install mongodb`


## 卸载
brew卸载mongodb
>`brew uninstall mongodb` 
 
查看确认一下
>`brew list`

## 常用指令

show dbs
use db
db.createCollection('user')
show collections
db.user.insert({name: '', age:30, sale: true})
db.user.find()
db.user.find().pretty()


## 常见问题

`brew update` 报错：
fatal: unable to access 'https://github.com/Homebrew/homebrew-core/': LibreSSL SSL_read: SSL_ERROR_SYSCALL, errno 54
Error: Fetching /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core failed!
解决：https://github.com/Homebrew/homebrew-core/issues/30917

`brew update` 继续报错，这次的大概意思是找不到mongodb，查了一下才发现，竟然！是因为mongodb不开源了，详细见：https://segmentfault.com/a/1190000020400235，更多mongodb取消开源的八卦：https://www.infoq.cn/article/1_WCE7EZkCSBbbYMbUra

正确的安装方式：https://www.runoob.com/mongodb/mongodb-osx-install.html



