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

# entry自动侦测
在开发页面时，只需要按照一定的规则部署目录，则程序可以自动侦测到相应如入口文件以及模板文件，即无需手动配置入口文件和模板文件，提高开发效率。

满足自动侦测的目录结构：
```
# 第一种，可以参考index.html或demo.html相应的页面源码文件(src/pages/)
src/pages/xxx
    app.js     # 自动侦测的入口文件
    ...
```

```
# 第二种，可以参考news.html相应的页面源码文件(src/pages/news)
src/pages/xxx
    app.js     # 自动侦测的入口文件
    base.art   # 自动侦测的基础模板文件，如果页面目录没有base.art文件，会自动使用src/pages/base.art作为基础模板
    ...
```

# 发布
只需要将dist目录发布到Web服务器即可