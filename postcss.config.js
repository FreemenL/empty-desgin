module.exports = (ctx) => ({
    parser: ctx.parser ? 'sugarss' : false,
    map: ctx.env === 'development' ? ctx.map : false,
    plugins: {
      'postcss-import': {},//内联@import规则引用的样式表。
      'cssnano': {},//包含优化CSS大小的插件，以便在生产中使用。
      'atcss':{},
      "autoprefixer": {}
    }
  })