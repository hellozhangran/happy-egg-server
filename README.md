# 《重学Node.js》

## 想法
现在是2019年11月24日，还有人要开始学习Node.js吗？

Node.js大概从2014年开始火热，现在搜一下学习教程，很多开源教程都是3~5年前写下的。再详细搜一下express、mongodb相关文章，时间点大部分也是2017，大量的Node.js开源项目也已经停更了。当年大家都在讨论Node.js为何这么火，而此刻我发现大家开始讨论为何Node.js不火了。我也是从五年前开始接触Node.js，但由于工作场景中很少使用，所以有了后面的学习放弃、再学再放弃。最近打算再捡起来系统性的学习一下，却发现现在大部分教程都已过老。比如，启动项目已经不再使用supervisor而是用nodemon；mongodb已经修改协议不再开源，homebrew也已对其下架，无法用brew install方便的安装了；从Node8开始已默认支持async语法无需babel了；现在Node.js的稳定版已经是12.13.1了。

所以在自己学习了一周，写了几个demo后决定写一个《重学Node.js》系列，记录的同时也可以分享给同样在重学或新学Node.js的同学们~ 

## 做啥&咋做
目的很简单，重新学一遍 Node.js，并沉淀成项目和文档，以便于下次不需要再重学！具体来说，打算以一个爬虫项目为起点，在做项目过程中不断熟悉Node、熟悉服务端领域，并不断增加新的功能新的技术，一个词就是现学现卖。比如，刚开始能想到的就是用 Node 做一个爬虫然后通过RESTful API的方式提供给客户端。但此刻大概是两周后吧，又有几个新的点冒出来可以加到项目中或写出来的，如OAuth、RPC、JWT等。

学无止境，最可贵的是坚持，有想一起学的赶紧加入吧，你们的催更应该能给我带来极大的动力。目前已经开始两周了，每天都会有更新（希望别断，阿门），更新进度在最下方的 **进度Changelog** 中。

## 为何是叫happy-egg-server
本来没想写教程只打算做个信息收集类项目，自己建了一个repo `happy-egg-server`，也可以叫闲蛋扒。可以从各网站扒下每天最火的一篇文章最终汇聚成一个新页面方便查看，纯粹出于个人兴趣。现在打算写点东西的话就还在这个repo中吧，万一坚持不下去的话至少项目还在，代码也是积累，翻翻看下也能当博客>_<。

## 目录
*目前项目进度已经可以涵盖前5篇的内容了，文档部分可能会延后*

1. [本地搭建一个简易开发环境](https://github.com/hellozhangran/happy-egg-server/blob/master/docs/1.dev-local.md)
2. [使用express实现RESTful API](https://github.com/hellozhangran/happy-egg-server/blob/master/docs/2.node-restful-api.md)
3. [mongodb以及mongoose的使用](https://github.com/hellozhangran/happy-egg-server/blob/master/docs/3.mongodb-mongoose.md)
4. [实现一个简易爬虫&启动定时任务](https://github.com/hellozhangran/happy-egg-server/blob/master/docs/4.crawler-schedule.md)
5. [部署项目到腾讯云服务器](https://github.com/hellozhangran/happy-egg-server/blob/master/docs/5.tcloud.md)
6. [PM2进一步应用以及如何用PM2做负载均衡](https://github.com/hellozhangran/happy-egg-server/blob/master/docs/6.pm2.md)

## 可能涉及内容

* Node Server RESTful API
* Mongodb
* Mongoose的增删改查
* Mongodb的负载均衡
* 爬虫/定时任务
* 静态服务器
* Node调试
* OAuth
* SSR
* RPC
* JWT
* Redis缓存

## 进度Changelog

记录每天更新的内容 [CHANGELOG](https://github.com/hellozhangran/happy-egg-server/blob/master/CHANGELOG.md)