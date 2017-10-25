当前仓库的slides.html包含了这个前后端分离方案的介绍

# 依赖
1. Node.js + NPM（官网最新版或稳定版即可）
2. 七牛相关信息（如果需要`npm run build`）

# 部署
1. 安装依赖库，`npm install`
2. 修改七牛配置文件，拷贝config目录下的qiniu.config.js.default，并粘贴一份新文件到同目录下，新文件去掉.default后缀
3. 开发时运行`npm run dev`开启开发服务器
4. 构建时运行`npm run build`，构建完成后，项目的静态资源文件会自动被上传到七牛，并在dist目录生成静态文件且自动引用相关资源

# Demo介绍
在可以正常运作`npm run dev`之后，可以运行这个项目的一些demo

- `http://localhost:9000/index.html` 这个demo展示了art-template一些基本功能：渲染动态数据、include其他模板文件
- `http://localhost:9000/demo.html` 这个demo展示了怎样封装模块以及调用封装好的模块，怎样调用接口（注意，接口部署在我本地，所以只能看代码不能运行）
- `http://localhost:9000/news.html` 这个demo展示了简单的接口调用，模板渲染，较为综合，由于接口是第三方的，所以只能在开发时运行，编译后请求不了

# 发布
只需要将dist目录发布到Web服务器即可