# mongodb

## 1. 如果本地已经安装过

brew查看是否已安装，前提是当初通过brew安装的
> brew list

启动数据库：（后面的地址是通过brew安装时的默认文件地址）
> `mongod mongod --config /usr/local/etc/mongod.conf`

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
