## A vue demo compiled with fis3
> 项目基于fis3,vue,vue-router,iview组件库搭建，示例fis3如何结合vue编译使用，配置了本地local dev模式，远程dev模式和publish模式，便于在不同的开发、联调、测试、上线的各个阶段使用。

## build step

### install
```sh
npm install

```
### run
#### development environment
1. 启动fis3 server
```sh
fis3 server start
```
2. 查看fis3 server部署的目录
```
fis3 server open
```
3. 本地开发部署
本地启动fis3内置的server，然后将产出代码源文件部署到本地服务器，默认端口8080，多项目部署的时候会冲突，可用-p参数控制，或者使用`fis3 server open`命令打开server的www目录手动控制。
```sh
npm run dev
```

4. 远程部署
将产出通过http-push传输到指定服务器，需在服务器端配置receiver，具体参考[fis3官方文档](http://fis.baidu.com/fis3/docs/beginning/debug.html#%E5%8F%91%E5%B8%83%E5%88%B0%E8%BF%9C%E7%AB%AF%E6%9C%BA%E5%99%A8)。可修改fis-conf.js中的host配置，指定部署到远程服务器host名称。
```sh
npm run dev
```

### build 
压缩打包代码并输出到output目录，可修改fis-conf.js中的cdnHost配置，以用于替换代码引用中的静态资源绝对路径，然后将铲除到output的内容部署到服务器端即可。
```
npm run build
```
