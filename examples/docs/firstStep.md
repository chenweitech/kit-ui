## 下载并启动项目
### 克隆项目到本地
``` shell
git clone https://github.com/chenweitech/kit-ui.git
```
### 使用yarn作为包管理工具
``` shell
yarn install
```
### 工作流命令一览
你可以在package.json文件中查看所有的构建命令
#### 本地调试和组件开发
运行一个可以编写文档和在线调试的本地服务器
``` shell
yarn server
```
代码风格检查
``` shell
yarn lint
```
运行单元测试
``` shell
yarn test:unit
```
#### 构建可用于生产环境的lib文件（需要管理员权限）
``` shell
yarn build:lib
```
#### 部署网站（需要管理员权限）
构建并部署当前版本的代码到线上
``` shell
yarn deploy
```




