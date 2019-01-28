import React, { Component } from "react";
import components from '@components/load-component';

const { EcodeHighlight } = components;

class Intro extends Component<any, any> {
  render() {
    return (
      <div className={"animated fadeIn emptyd-content"}>
        <h1 className="empty-title">empty-desgin 简称 emptyd </h1>
        <p className="empty-line-content">
          <code className="empty-code">emptyd</code>
          是基于
          <code className="empty-code">react + typescript + antd</code>
          的扩展组件库，主要包括
          <code className="empty-code">
            通用小组件、快速开发页面的多风格模板(HOC高阶组件)、通用工具函数、通用样式类
          </code>
        </p>
        <p className="empty-line-content">
          <code className="empty-code">emptyd</code> 需要搭配
          <code className="empty-code">emptyd-admin-webpack</code> 脚手架使用
        </p>
        <h1 className="empty-title">emptyd-admin-webpack 脚手架 v0.0.1 </h1>
        <p className="empty-line-content">
          基于
          <code className="empty-code"> react + typescript + react-router-dom + redux + react-redux + redux-saga + antd + emptyd + less </code>
          的 webpack4 前端开发环境
        </p>

        <p className="empty-line-content">
          1、针对不同的
          <code className="empty-code">loader</code>
          采用了多线程编译，指定精确处理的目录和排除的目录，并开启缓存 极大的加快了编译速度。
        </p>

        <p className="empty-line-content">
          2、使用
          <code className="empty-code"> webpack.DllReferencePlugin </code>
          根据环境自动 提取固定资源，加快编译与打包速度
        </p>

        <p className="empty-line-content">
          3、区分生产环境和开发环境,优化代码产出
        </p>

        <p className="empty-line-content">
          4、启用
          <code className="empty-code"> cssmodule </code>
          默认使用
          <code className="empty-code"> postcss + postcss-cssnext </code>
          ，内置处理浏览器前缀。
        </p>

        <p className="empty-line-content">
          5、启用
          <code className="empty-code"> tree shaking </code>
        </p>

        <p className="empty-line-content">
          6、启用
          <code className="empty-code"> scope hoisting </code>
        </p>

        <p className="empty-line-content">
          7、
          <code className="empty-code">Babel </code>
          配有
          <code className="empty-code"> transform-runtime </code>
          让代码更优化
        </p>

        <p className="empty-line-content">
          8、更改文件,防缓存的hash规则
        </p>

        <p className="empty-line-content">
          9、把小图片转成
          <code className="empty-code">base64 码 </code>
        </p>

        <p className="empty-line-content">
          10、快速编译，热更新，自动刷新
        </p>

        <p className="empty-line-content">
          11、 <code className="empty-code">resolve.modules</code> 优化模块查找路径
        </p>

        <p className="empty-line-content">
          12、 <code className="empty-code">optimization splitChunks</code> 合并公共代码
        </p>

        <p className="empty-line-content">
          13、 单独抽离<code className="empty-code">css</code>文件
        </p>

        <p className="empty-line-content">
          14、压缩<code className="empty-code">css js</code>文件
        </p>

        <p className="empty-line-content">
          15、大文件跳过编译 直接拷贝
        </p>

        <p className="empty-line-content">
          16、自定义<code className="empty-code">loader</code>优化文件引入
        </p>

        <p className="empty-line-content">
          17、自定义<code className="empty-code">plugin</code>输出编译产出
        </p>

        <p className="empty-line-content">
          18、<code className="empty-code">nodemon</code>监听配置文件改动
        </p>

        <p className="empty-line-content">
          19、系统级的错误提示
        </p>

        <p className="empty-line-content">
          20、端口冲突自动切换
        </p>

        <p className="empty-line-content">
          21、自动生成编译日志
        </p>

        <p className="empty-line-content">
          22、编译结果可视化
        </p>

        <p className="empty-line-content">
          23、本地端口运行打包后项目
        </p>

        <p className="empty-line-content">
          24、脚手架 配置化
        </p>
        <h1 className="empty-title"> 脚手架目录结构 </h1>
        <EcodeHighlight.component language='markdown' >
          {`
            ├── build                    # webpack 配置目录
            │   ├── loaders              # 自定义loader目录
            │   ├── plugins              # 自定义plugin目录
            │   ├── template             # html模版目录
            ├── config                   # 系统配置目录
            ├── dist                     # 打包资源
            ├── log                      # 日志目录
            ├── scripts                  # 运行脚本
            ├── src                      # 源码目录
            │   ├── components           # 通用组件目录
            │   ├── config               # 系统自定义配置 
            │   ├── pages                # 业务模块代码路径
            │   ├── public               # 静态资源路径
            │   ├── router               # 路由相关路径 
            │   ├── service              # api相关路径
            │   ├── store                # redux 状态管理相关路径
            │   ├── styles               # redux 通用样式文件路径
            │   ├── index.tsx            # 入口文件 
            ├── static                   # 静态资路径(直接拷贝的文件)
            ├── typings                  # ts类型声明文件
            ├── .babelrc                 # babel配置(预设和插件)
            ├── .eslintrc.js             # eslint配置
            ├── package.json             # 项目描述
            ├── postcss.config.js        # postcss配置
            └── tsconfig.json            # ts配置
          `}
        </EcodeHighlight.component>
        <h1 className="empty-title">项目启动</h1>
        <p className="empty-line-content">
          1、环境配置  为了把保证项目正常运行，请自行更新相关环境。
        </p>
        <p className="empty-line-content">
              安装<code className="empty-code">node.js</code>
              安装<code className="empty-code">git</code>
        </p>
        <p className="empty-line-content">
          2、通过<code className="empty-code">git</code>拉取代码
        </p>
        <EcodeHighlight.component language='bash' showNumber={false}>
          {`
            $ git clone https://github.com/FreemenL/emptyd-admin-webpack.git
            $ cd emptyd-admin-webpack 
          `}
        </EcodeHighlight.component>
        <p className="empty-line-content">
          3、下载依赖  请确保你的环境配置完成，然后就可以开始以下步骤
        </p>
        <EcodeHighlight.component language='bash' showNumber={false} >
          {`
            $ npm install                   # Install project dependencies
            $ npm start                     # Compile and launch
          `}
        </EcodeHighlight.component>
        <h1 className="empty-title"> 命令说明 </h1>
        <p className="empty-line-content">
        开发过程中，你用得最多的会是npm start，但是这里还有很多其它的处理：
        </p>
        <EcodeHighlight.component language='bash' showNumber={false} >
          {`
            $ npm start                   # 初始化启动项目（生成Dll文件并启动服务）
            $ npm run build               # 打包 
            $ npm run ls                  # 将dist目录在本地8080端口运行 
            $ npm run upload              # 上传dist目录到服务器 （ 没有配置jenkins等持续集成的情况下方便上传代码 ） 
          `}
        </EcodeHighlight.component>
        <h1 className="empty-title">系统配置说明</h1>
        <p className="empty-line-content"> 配置文件位置 <code className="empty-code">config/index.js</code></p>
        <EcodeHighlight.component language='javascript' >
          {`
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
                appTsLoader: ['node_modules/_free-validator@1.0.7@free-validator', 'node_modules/_freetool@0.0.3@freetool'],
                // 静态资源路径 存放较大文件 该目录下存放文件会被 CopyWebpackPlugin 直接复制到打包后dist/static 路径
                appStatic: 'static',
                // 下不会被 cssmodule 处理的文件路径
                appExcludeCssModule: ["prismjs",'antd', 'normalize.css','animate.css', 'rc-texty', 'nprogress', 'braft-editor', 'rc-queue-anim', 'viewerjs'],
                // 路径别名相对源码目录
                appPathAlias: {
                  '@src': '',
                  '@config':'config',
                  '@styles':"styles",
                  '@components': "components",
                  '@actions': "store/actions",
                  '@constants': "store/constants",
                  '@pages': "pages",
                  '@reducers': "store/reducers",
                  '@router': "router",
                  '@store': "store",
                  '@public': "public",
                  '@utils': "utils",
                  '@service': "service"
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
                    target: 'http://193.112.220.100',
                    changeOrigin: true,
                    secure: true
                  }
                }
              },
              // 是否生成编译报告  为true时候可在 127.0.0.1:8888查看编译结果
              bundleAnalyzerReport: false,
              // 动态连接库中排除
              dllLibraryExclude: ['free-validator','freetool','antd', 'normalize.css','animate.css'],
              // 是否开启编译缓存 
              onCompiltionCache: false,
              // 是否开启代码检查 
              onLint: true,
              // 上传服务器配置
              remoteServer:{
                uploadFile:'./dist/**',
                sshConfig:{
                  remotePath:'/root/nginx_szcg/website/zhifa/dist',
                  ssh: { //正式
                    host: "129.139.254.333",
                    port: 22,
                    username: 'root',
                    password: 'xxxxxxxxxxxxx'
                  }, 
                  commands: [
                     //删除现有文件
                    'rm -rf /root/nginx_szcg/website/zhifa/dist'
                  ]
                }
              }
            }
            
          `}
        </EcodeHighlight.component>
      </div>
    );
  }
}

export default Intro;
