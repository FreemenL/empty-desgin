# emptyd-admin-webpack
基于typescript react webpack的脚手架 


### 关于本项目功能

1.针对不同的loader采用了多线程编译，指定精确处理的目录和排除的目录，并开启缓存 极大的加快了编译速度。

2.使用webpack.DllReferencePlugin 根据环境自动 提取固定资源，加快编译与打包速度

3.区分生产环境和开发环境。

4.启用cssmodule 默认使用postcss + postcss-cssnext，内置处理浏览器前缀。

5.启用 tree shaking 

6.启用 scope hoisting  

7.Babel配有transform-runtime让代码更优化

8.更改文件,防缓存的hash规则
 
9.把小图片转成base64码  

10.快速编译，热更新，自动刷新

11.resolve.modules 优化模块查找路径 

12.optimization splitChunks 合并公共代码

13.单独抽离css文件

14.压缩css js 文件。

15.大文件跳过编译 直接拷贝

16.自定义loader 优化文件引入 

17.自定义plugin 输出编译产出 

18.nodemon 监听配置文件改动

19.系统级的错误提示

20.端口冲突自动切换 

21.自动生成编译日志

22.编译结果可视化 

23.本地端口运行打包后项目 

24.脚手架 配置化
## 程序目录

```
├── build                    # webpack 配置目录
│   ├── loaders              # 自定义loader目录
│   ├── plugins              # 自定义plugin目录
│   ├── template             # html模版目录
├── config                   # 系统配置目录
├── dist                     # 打包资源
├── log                      # 日志目录
├── scripts                  # 运行脚本
├── src                      # 源码目录
├── static                   # 静态资路径(直接拷贝的文件)
├── .babelrc                 # babel配置预设和插件
├── .global.d.ts             # 全局类型声明文件
├── package.json             # 项目描述
├── postcss.config.js        # postcss配置
└── tsconfig.json            # ts配置
```

## 项目启动

### 环境配置
* 为了把保证项目正常运行，请自行更新相关环境。
1. 安装[node.js](https://nodejs.org/)
2. 安装[git](https://git-scm.com/)

### 依赖配置
1. 首先clone项目
```bash
$ git clone https://github.com/FreemenL/emptyd-admin-webpack.git
$ cd emptyd-admin-webpack
```
2. 下载依赖
* 请确保你的环境配置完成，然后就可以开始以下步骤
  ```bash
  $ npm install                   # Install project dependencies
  $ npm start                     # Compile and launch
  ```

  ## 命令说明

开发过程中，你用得最多的会是`npm run dev`，但是这里还有很多其它的处理：

|`npm run <script>`|Explain|
|------------------|-----------|
|start|初始化启动项目（生成Dll文件并启动服务）|
|build|打包|
|ls|将dist目录在本地8080端口运行|