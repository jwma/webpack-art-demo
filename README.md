当前仓库的slides.html包含了这个前后端分离方案的介绍

# 依赖
1. Node.js + NPM（官网最新版或稳定版即可）
2. 七牛相关信息（如果需要`npm run build`）

# 部署
1. 安装依赖库，`npm install`
2. 修改七牛配置文件，拷贝config目录下的qiniu.config.js.default，并粘贴一份新文件到同目录下，新文件去掉.default后缀
3. 开发时运行`npm run dev`开启开发服务器
4. 构建时运行`npm run build`，构建完成后，项目的静态资源文件会自动被上传到七牛，并在dist目录生成静态文件且自动引用相关资源

# 发布
只需要将dist目录发布到Web服务器即可