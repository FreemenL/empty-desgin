# emptyd-admin-webpack
基于typescript react webpack的脚手架 
>说明：一些第三方库缺少或者类型声明文件错误的情况下 ，需要手动编写类型声明文件或者对原本的文件进行改 ，此脚手架中所依赖的redux-persist的类型声明文件有误， 所以需要手动修改 ，可以直接拿[这个文件](https://github.com/FreemenL/react16-redux-typescript-webpck4-antd/blob/master/index.d.ts)覆盖 node_modules/redux-persist/src/index.d.ts

>因为该项目部署了Jinkens 所以直接把服务器上的依赖包进行了修改， 所以在package.json 中去掉了redux-persist依赖项 ```所以需要在install 之后单独下载redux-persist依赖 并且按上面步骤进行操作```

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
├── typings                  # ts类型声明文件
├── .babelrc                 # babel配置(预设和插件)
├── .eslintrc.js             # eslint配置
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

开发过程中，你用得最多的会是`npm start`，但是这里还有很多其它的处理：

|`npm run <script>`|Explain|
|------------------|-----------|
|start|初始化启动项目（生成Dll文件并启动服务）|
|build|打包|
|ls|将dist目录在本地8080端口运行|

### 系统配置说明

```typescript
module.exports = {
  // 模式  dev | run  区别:dev 会开启配置文件监听 run 不会
  pattern: 'run',
  // 系统路径配置 相对命令行启动目录 
  systemPath: {
    // 入口文件
    appIndex: 'src/index',
    // ts配置文件
    appTsConfig: 'config/tsconfig',
    // webpack ts配置
    webpackTsConfig: 'config/tsconfig-for-webpack-config',
    // 动态链接库
    appdllLibrary: '_dllLibrary_',
    // title图标
    appFavicon: 'src/public/favicon',
    // 依赖包路径
    appNodeModules: 'node_modules',
    // 日志目录
    appLog: 'log',
    // 源码目录
    appSrc: 'src',
    // 打包路径
    appBuild: 'dist',
    // 配置文件目录
    appConfig: ['build', 'config'],
    // 自定义loader目录
    appLoader: 'build/loaders',
    // 自定义　依赖包路径下需要awesome-typescript-loader 处理的文件目录
    appTsLoader: ['node_modules/_emptyd@0.0.7@emptyd', 'node_modules/_freetool@0.0.2@freetool'],
    // 静态资源路径 存放较大文件 该目录下存放文件会被 CopyWebpackPlugin 直接复制到打包后dist/static 路径
    appStatic: 'static',
    // node_modules 下不会被cssmodule 处理的文件路径
    appExcludeCssModule: ['antd', 'normalize.css', 'rc-texty', 'nprogress', 'braft-editor', 'rc-queue-anim', 'viewerjs'],
    // 路径别名相对源码目录
    appPathAlias: {
      '@src': '',
      '@components': `components`,
      '@actions': `store/actions`,
      '@constants': `store/constants`,
      '@pages': `pages`,
      '@reducers': `store/reducers`,
      '@router': `router`,
      '@store': `store`,
      '@public': `public`,
      '@utils': `utils`,
      '@servies': `servies`
    }
  },
  // 系统常量
  systemConstant: {
    // 系统名称
    title: 'emptyd系统',
    // html模板文件 路径相对命令行启动目录
    htmlTemplate: './build/template/index.html'
  },
  // 开发环境配置
  devConfig: {
    // 本地服务端口 支持同时启动多个服务
    localServerPort: 8091,
    // 代理配置
    proxyTable: {
      '/**': {
        target: 'http://193.112.220.120',
        changeOrigin: true,
        secure: true
      }
    }
  },
  // 是否生成编译报告  为true时候可在 127.0.0.1:8888查看编译结果
  bundleAnalyzerReport: false,
  // 动态连接库中排除
  dllLibraryExclude: ['antd', 'normalize.css'],
  // 是否开启编译缓存 
  onCompiltionCache: true,
  // 是否开启代码检查 
  onLint: true
}

```
