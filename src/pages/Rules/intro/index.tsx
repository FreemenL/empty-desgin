import React, { Component } from "react";
import  { EcodeHighlight } from 'emptyd';

class Intro extends Component<any, any> {
  render() {
    return (
      <>
        <h1 className="e-title">empty-desgin 简称 emptyd </h1>
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
          <code className="empty-code">emptyd-admin-webpack</code> 脚手架使用，
          或者用<code className="empty-code">处理ts文件的loader</code>处理<code className="empty-code">node_modules/emptyd</code>目录
        </p>
        <p className="empty-line-content">
          <code className="empty-code">emptyd</code>支持按需加载，并强烈建议进行按需加载相关配置，配置方式如下
        </p>
        <p className="empty-line-content">
          1、下载emptyd的babel插件<code className="empty-code">babel-plugin-empty-import</code>
        </p>
         <EcodeHighlight language='bash' showNumber={false} >
          {`
            $cnpm install babel-plugin-empty-import -D
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
          2、在<code className="empty-code">.babelrc</code>中添加如下配置。
        </p>
         <EcodeHighlight language='json' showNumber={false} >
          {`
             {
                "presets": [
                 ...
                ],
                "plugins": [
                  ...,
                  ["empty-import",{
                    "libraryName": "emptyd",
                  }]
                ]
              }
          `}
        </EcodeHighlight>
        <h1 className="e-title">emptyd-admin-webpack 脚手架 v0.0.1 </h1>
        <p className="empty-line-content">
          基于
          <code className="empty-code"> react + typescript + react-router-dom + redux + react-redux + redux-saga + antd + emptyd + less </code>
          的 webpack4 前端开发环境
        </p>

        <p className="empty-line-content">
          1、针对不同的
          <code className="empty-code">loader</code>
          采用了多进程编译，指定精确处理的目录和排除的目录，并开启缓存 极大的加快了编译速度。
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
          12、 <code className="empty-code">optimization splitChunks</code> 代码拆分
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
        <h1 className="e-title"> 脚手架目录结构 </h1>
        <EcodeHighlight language='markdown' >
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
            │   ├── styles               # 通用样式文件路径
            │   ├── index.tsx            # 入口文件 
            ├── static                   # 静态资路径(直接拷贝的文件)
            ├── typings                  # ts类型声明文件
            ├── .babelrc                 # babel配置(预设和插件)
            ├── .eslintrc.js             # eslint配置
            ├── package.json             # 项目描述
            ├── postcss.config.js        # postcss配置
            └── tsconfig.json            # ts配置
          `}
        </EcodeHighlight>
        <h1 className="e-title">项目启动</h1>
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
        <EcodeHighlight language='bash' showNumber={false}>
          {`
            $ git clone https://github.com/FreemenL/emptyd-admin-webpack.git
            $ cd emptyd-admin-webpack 
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
          3、下载依赖  请确保你的环境配置完成，然后就可以开始以下步骤
        </p>
        <EcodeHighlight language='bash' showNumber={false} >
          {`
            $ npm install                   # Install project dependencies
            $ npm start                     # Compile and launch
          `}
        </EcodeHighlight>
        <h1 className="e-title"> 命令说明 </h1>
        <p className="empty-line-content">
        开发过程中，你用得最多的会是npm start，但是这里还有很多其它的处理：
        </p>
        <EcodeHighlight language='bash' showNumber={false} >
          {`
            $ npm start                   # 初始化启动项目（生成Dll文件并启动服务）
            $ npm run build               # 打包 
            $ npm run ls                  # 将dist目录在本地8080端口运行 
            $ npm run upload              # 上传dist目录到服务器 （ 没有配置jenkins等持续集成的情况下方便上传代码 ） 
          `}
        </EcodeHighlight>
        <h1 className="e-title">系统配置说明</h1>
        <p className="empty-line-content"> 配置文件位置 <code className="empty-code">config/index.js</code></p>
        <EcodeHighlight language='javascript' >
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
        </EcodeHighlight>
        <h1 className="e-title">eslint 规则</h1>
        <EcodeHighlight language='javascript'>
          {`
           rules: {
            /* react */
            'react/no-access-state-in-setstate': 2,
            'react/no-children-prop': 0,
            'react/no-array-index-key': 2,
            'react/no-direct-mutation-state': 2,
            'react/no-find-dom-node': 2,
            'react/no-redundant-should-component-update': 2,
            'react/no-render-return-value': 2,
            'react/no-typos': 2,
            'react/no-string-refs': 2,
            'react/no-this-in-sfc': 0,
            'react/no-unescaped-entities': 2,
            'react/no-unused-state': 2,
            'react/no-will-update-set-state': 2,
            'react/react-in-jsx-scope': 2,
            'react/require-render-return': 2,
            'react/sort-comp': 2,
            'react/style-prop-object': 2,
            'react/void-dom-elements-no-children': 2,
            /*   jsx   */
            'react/jsx-filename-extension': [1, { 'extensions': ['.ts', '.tsx'] }], // 限制文件后缀名必须为ts|tsx
            'react/jsx-max-depth': [2, { 'max': 20 }], // 限制jsx 最大嵌套层次 20
            'react/jsx-max-props-per-line': [2, { 'maximum': 5,'when': 'multiline' }], // Limit maximum of props on a single line in JSX 
            'react/jsx-no-bind': 0, // 不允许的jsx中 使用bind 和 箭头函数 
            'react/jsx-no-comment-textnodes': 2, // 中必须使用{/**/} 的注释方式
            'react/jsx-no-duplicate-props': 2, // 防止jsx 中重复的属性名 
            'react/jsx-no-literals': 0, // 防止在 JSX 中使用字符串文字
            'react/jsx-no-undef': [ 2 , { 'allowGlobals': true }], // 在JSX中禁止未声明的变量
            'react/jsx-pascal-case': 2, // 为用户定义的JSX组件强制使用PascalCase
            'react/jsx-props-no-multi-spaces': 0, // 强制所有属性之间以及标记名称和同一行中的第一个属性之间只有一个空格。
            'react/jsx-uses-react': 2, // 防止React被错误地标记为未使用
            'react/jsx-uses-vars': 2, // 防止JSX中使用的变量被错误地标记为未使用
            /*  js  */
            'no-console': 1,
            'no-debugger': 0,
            'no-dupe-keys': 0, // 禁止对象字面量中出现重复的 key
            'no-extra-parens': 0, // 禁止不必要的括号
            'no-unsafe-finally': 0, // 禁止在 finally 语句块中出现控制流语句
            'no-empty-character-class': 0, // 禁止在正则表达式中使用空字符集
            'no-prototype-builtins': 0, // 禁止直接调用 Object.prototypes 的内置属性
            'no-unexpected-multiline': 0, // 禁止出现令人困惑的多行表达式
            'valid-jsdoc': 0, // 强制使用有效的 JSDoc 注释
            'getter-return': 2, // 强制 getter 函数中出现 return 语句
            'no-await-in-loop': 2, // 禁止在循环中出现 await
            'no-compare-neg-zero': 2, // 禁止与 -0 进行比较
            'no-cond-assign': 2, // 禁止条件表达式中出现赋值操作符
            'no-control-regex': 2, // 禁止在正则表达式中使用控制字符
            'no-dupe-args': 2, // 禁止 function 定义中出现重名参数
            'no-duplicate-case': 2, // 禁止出现重复的 case 标签
            'no-empty': 2, // 禁止出现空语句块      
            'no-ex-assign': 2, // 禁止对 catch 子句的参数重新赋值
            'no-extra-boolean-cast': 2, // 禁止不必要的布尔转换
            'no-extra-semi': 0, // 禁止不必要的分号
            'no-inner-declarations': 2, // 禁止在嵌套的块中出现变量声明或 function 声明
            'no-invalid-regexp': 2, // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
            'no-irregular-whitespace': 2, // 禁止在字符串和注释之外不规则的空白
            'no-obj-calls': 2, // 禁止把全局对象作为函数调用
            'no-regex-spaces': 2, // 禁止正则表达式字面量中出现多个空格
            'no-template-curly-in-string': 2, // 禁止在常规字符串中出现模板字面量占位符语法      
            'no-unreachable': 2, // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
            'no-unsafe-negation': 2, // 禁止对关系运算符的左操作数使用否定操作符
            'use-isnan': 2, // 要求使用 isNaN() 检查 NaN
            'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较
            'dot-location': 2, // 强制在点号之前和之后一致的换行
            'no-caller': 2, // 禁用 arguments.caller 或 arguments.callee
            'no-empty-pattern': 2, // 禁止使用空解构模式
            'no-lone-blocks': 2, // 禁用不必要的嵌套块
            'no-redeclare': 2, // 禁止多次声明同一变量
            'no-return-await': 2, // 禁用不必要的 return await
            'no-throw-literal': 2, // 禁止抛出异常字面量
            'no-unmodified-loop-condition': 2, // 禁用一成不变的循环条件
            'no-useless-escape': 2, // 禁用不必要的转义字符
            'no-useless-return': 2, // 禁止多余的 return 语句
            'require-await': 2, // 禁止使用不带 await 表达式的 async 函数
            'no-dupe-class-members': 2, // 禁止类成员中出现重复的名称 
            'no-duplicate-imports': 2, // 禁止重复导入
            'no-new-symbol': 2, // 禁止 Symbolnew 操作符和 new 一起使用 
            'no-this-before-super': 2, // 在构造函数中禁止在调用super()之前使用this或super
          }
          `}
        </EcodeHighlight>
      </>
    );
  }
}

export default Intro;
