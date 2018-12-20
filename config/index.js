module.exports = {
  // 模式  dev | run  区别:dev 会开启配置文件监听 run 不会
  pattern: 'dev',
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
    // proxyTable: {
    //   '/**': {
    //     target: 'http://193.112.220.120',
    //     changeOrigin: true,
    //     secure: true
    //   }
    // }
  },
  // 是否生成编译报告  为true时候可在 127.0.0.1:8888查看编译结果
  bundleAnalyzerReport: false,
  // 动态连接库中排除
  dllLibraryExclude: ['antd', 'normalize.css'],
  // 是否开启编译缓存 
  onCompiltionCache: false,
  // 是否开启代码检查 
  onLint: true
}
