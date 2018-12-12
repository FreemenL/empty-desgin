/**
 * 生产环境配置
 */
const path = require('path');
const paths = require('./paths');
const chalk = require('chalk');//终端样式
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const FilesPlugin = require("./plugins/FilesPlugin");
const devMode = process.env.NODE_ENV !== 'production';

let pathsToClean = [
  'dist'
]

let cleanOptions = {
  root: process.cwd()
}

module.exports = merge(common,{
  mode:"production",
  output:{
    filename: 'static/js/[name].[hash].js',
    path:paths.appBuild,
    publicPath: './',
    chunkFilename: 'static/js/[id].[chunkhash].js'
  },
 optimization: {
    nodeEnv: 'production',
    namedModules: true,
    noEmitOnErrors: true,//在编译时出现错误时，使用跳过发射阶段。
    runtimeChunk: { //运行时的每个入口点添加一个额外的块
      name: 'manifest'
    },
	  minimizer: [
	    new UglifyJSPlugin({
        uglifyOptions:{
          warnings: false,
          output: {
            comments: false,//去掉注释
            beautify: false,
          }
        },
	    sourceMap: true,
        cache: true,
        parallel: true //开启多线程。默认并发运行数：os.cpus().length - 1 (当前配置的数值为4)
	    })
	  ],
	  splitChunks: {//代码拆分
      name:true,
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,//最大的异步请求数
      maxInitialRequests: 3,//最大的初始请求数
      automaticNameDelimiter: '~',
      cacheGroups: {//缓存组
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10 // 该配置项是设置处理的优先级，数值越大越优先处理
        },
        commons: {//创建一个vendors块，其中包括node_modules整个应用程序中的所有代码。
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },   
        'async-vendors': {// 处理异步chunk 
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          chunks: 'async',
          name: 'async-vendors'
        },
        style: {
          chunks: 'all',
          name: 'styles',
          minChunks: 1,
          enforce: true,
          test: /.(css|scss|less)/
        }
      }
    }
 },
 plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new CleanWebpackPlugin(pathsToClean,cleanOptions),
    new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'//node提供的常量api
       }
    }),
    //压缩css
    new OptimizeCSSPlugin({
        cssProcessorOptions: {
            safe: true
        }
    }),
    //  缩减代码量  使代码在浏览器中具有更快的执行时间
    new webpack.optimize.ModuleConcatenationPlugin(),
    new FilesPlugin({path:paths.appLog,filename:"file-list.md"}),
 ]
});