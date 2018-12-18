/**
 * 生产环境配置
 */
import * as path from 'path';
const chalk = require('chalk');//终端样式
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const FilesPlugin = require("./plugins/FilesPlugin");
const devMode = process.env.NODE_ENV !== 'production';
const common = require('./webpack.base.ts');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const paths = require('./paths');


let pathsToClean = [
  'dist'
]

let cleanOptions = {
  root: process.cwd()
}

module.exports = merge(common, {
  devtool: false,
  mode: "production",
  output: {
    filename: 'static/js/[name].[contenthash].js',
    path: paths.appBuild,
    publicPath: './',
    chunkFilename: 'static/js/[id].[chunkhash].js'
  },
  optimization: {
    sideEffects: true,
    usedExports: true,
    nodeEnv: 'production',
    namedModules: true,
    //在编译时出现错误时，使用跳过发射阶段。
    noEmitOnErrors: true,
    //运行时的每个入口点添加一个额外的块
    runtimeChunk: {
      name: 'manifest'
    },
    minimize: true,
    minimizer: [
      new UglifyJSPlugin({
        exclude: /.dll.js$/,
        uglifyOptions: {
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
      }),
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true,
          autoprefixer: { disable: true },
          discardComments: {
            removeAll: true // 移除注释
          }
        }
      })
    ],
    splitChunks: {//代码拆分
      name: true,
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      //最大的异步请求数
      maxAsyncRequests: 5,
      //最大的初始请求数
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          // 该配置项是设置处理的优先级，数值越大越优先处理
          priority: -10
        },
        //创建一个vendors块，其中包括node_modules整个应用程序中的所有代码。
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        // 处理异步chunk 
        'async-vendors': {
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
    new CompressionWebpackPlugin({ //gzip 压缩
      filename: '[path].gz[query]',
      test: new RegExp(
        '\\.(js|css)$'    //压缩 js 与 css
      ),
      threshold: 10240,
      minRatio: 0.8
    }),
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'//node提供的常量api
      }
    }),
    //  缩减代码量  使代码在浏览器中具有更快的执行时间
    new webpack.optimize.ModuleConcatenationPlugin(),
    //自定义插件 输出打包产出文件 
    new FilesPlugin({ path: paths.appLog, filename: "file-list.md" }),
  ]
});