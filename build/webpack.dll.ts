import * as path from 'path';
const paths  = require("./paths");
const DllPlugin = require('webpack/lib/DllPlugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const systemConfig = require(path.resolve(process.cwd(),'config/index'));
const packages = require(path.resolve(process.cwd(),'package.json'));
const devMode = process.env.NODE_ENV !== 'production';

const webpackDllConfig:any = {
  // JS 执行入口文件
  entry: {
    //动态链接库
    [`${systemConfig.systemPath.appdllLibrary}_${process.env.NODE_ENV.substring(0,3)}`]:Object.keys(packages.dependencies).filter((dependency)=>!systemConfig.dllLibraryExclude.includes(dependency))
  },
  output: {
    // 输出的动态链接库的文件名称，[name] 代表当前动态链接库的名称，也就是 entry 中配置的 react 和 polyfill
    filename: '[name].dll.js',
    // 输出的文件都放到 static 目录下
    path: paths.appStatic,
    // 存放动态链接库的全局变量名称，例如对应 react 来说就是 _dll_react
    // 之所以在前面加上 _dll_ 是为了防止全局变量冲突
    library: '_dll_[name]',
  },
  mode:process.env.NODE_ENV,
  plugins: [
    // 接入 DllPlugin
    new DllPlugin({
      // 动态链接库的全局变量名称，需要和 output.library 中保持一致
      // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
      // 例如 react.manifest.json 中就有 "name": "_dll_react"
      name: '_dll_[name]',
      // 描述动态链接库的 manifest.json 文件输出时的文件名称
      path: path.join(paths.appStatic, '[name].manifest.json'),
    }),
  ],
};
//生产模式的动态链接库进行压缩
if(!devMode){
  webpackDllConfig.optimization = {
		minimizer: [
      new UglifyJSPlugin({
        uglifyOptions:{
          warnings: false,
          output: {
            beautify: false,
          }
        },
        //提取注释
        extractComments: true,
	      sourceMap: false,
        cache: true,
        //开启多线程。默认并发运行数：os.cpus().length - 1
        parallel: true 
	    })
		],
	};
}

module.exports  = webpackDllConfig;