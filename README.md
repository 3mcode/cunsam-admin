
<h1 align="center">村商通后台管理模板</h1>

<p align="center">
    <a href="#">
        <img src="https://img.shields.io/badge/website-CunSam-yellow.svg"  alt="村商通"/>
    </a>
    <a href="#">
        <img src="https://img.shields.io/github/license/3mcode/cunsam-admin.svg"  alt="cunsam license"/>
    </a>
    <a href="#">
        <img src="https://img.shields.io/github/release/3mcode/cunsam-admin.svg"  alt="cunsam release"/>
    </a>
    <a href="#">
        <img src="https://img.shields.io/github/last-commit/3mcode/cunsam-admin.svg"  alt="cunsam last-commit"/>
    </a>
</p>

<p align="center">
    <b>如果对您有帮助，请帮忙点右上角 "Star" 支持一下 谢谢！</b>
</p>

## 介绍
村商通是一套基于 ThinkPHP 框架开发的高性能开源商城框架系统，秉承极简、极速、极致的开发理念，采用前后端分离，支持分布式部署。框架内部使用面向对象模块化调用，在多终端、跨平台时采用 REST API 进行数据交互，可直接对接 PC、移动设备、小程序、云部署，构建 Android、IOS 的 APP。

## 前言
框架所有的业务处理逻辑存放在公共模块目录中，对于框架内的其他模块可通过面向对象的方式调用公共模块，而外部则以 API 接口进行交互，如此真正做到业务处理层的入口路径统一。

## 文档
[文档中心](# "文档中心")

## 仓库
[Github 仓库](https://github.com/3mcode/cunsam-admin "Github 仓库")

## 生态
框架系统 [Github 仓库](https://github.com/3mcode/cunsam "Github 仓库")

Rest接口调试 [Github 仓库](https://github.com/3mcode/cunsam-rest "Github 仓库") 

## 准备
在您使用本项目前，请先安装好 [node](https://nodejs.org "node")。项目技术栈基于 [es2015+](http://es6.ruanyifeng.com/ "es2015+")、[vue](https://cn.vuejs.org/ "vue")、[vuex](https://vuex.vuejs.org/ "vuex")、[vue-router](https://router.vuejs.org/ "vue-router") 、[vue-cli4](https://cli.vuejs.org/ "vue-cli") 、[axios](https://github.com/axios/axios "axios") 和 [element-ui](https://element.eleme.io/ "element-ui")，所有的请求数据都基于 REST 协议。

## 安装
> 如果您以前运行过 webpack 项目，并且本机 node 版本 >= 8，可以忽略这一步。

> 以下安装过程基本都使用命令行，请在适合的命令环境下输入。

### 安装 node
在 [node.js](https://nodejs.org/en/download/ "node.js 官网") 官网下载合适您系统的 node.js（推荐 10 以上的版本），安装完毕后可查看版本号。
```shell
node -v
v10.13.0

npm -v
6.12.0
```

### 安装 @vue/cli
此依赖建议全局安装。
```shell
npm install -g @vue/cli
```

### 克隆项目
```shell
git clone https://github.com/3mcode/cunsam-admin.git
```

### 安装依赖
进入到克隆下来的项目目录中，执行安装依赖命令：
```shell
npm install
# 或
yarn
```

## 启动
```shell
# 启动服务
npm run serve

# 正式发布
npm run build

# 检测修复
npm run lint

# 单元测试
npm run test:unit
```

## 配置
接口参数使用动态配置（正式发布后依旧可以修改配置文件），在「public\static\config」路径下存在「development」与「production」js 文件，分别代表`开发环境`与`生产环境`。

之后将配置修改为您的环境，具体配置如下：
```js
const serverConfig = {
  BASE_API: '//you.domain.replace/api',                   // API 接口访问地址
  APP_KEY: '86757125',                              // 后端获取的 App应用 钥匙
  APP_SECRET: 'ea1bd533d001fd73b09944f04c96a6fc'    // 后端获取的 App应用 密钥
}
```

#### 声明
村商通使用 AGPLv3 开源，请遵守 AGPLv3 的相关条款。

本项目包含的源码（包括第三方）和二进制文件存在版权信息另行标注的情况。

#### 感谢
<a href="https://github.com/d2-projects/d2-admin" target="_blank">D2-Admin</a>
