module.exports = (ctx) => ({
  parser: ctx.parser ? 'sugarss' : false,
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    'postcss-import': {}, // 在@import css文件的时候让webpack监听并编译
    'cssnano': {
      preset: "advanced", 
      autoprefixer: false, 
      "postcss-zindex": false
    }, // 包含优化CSS大小的插件，以便在生产中使用。
    'atcss': {},
    "postcss-url": {},
    // https://github.com/csstools/postcss-preset-env    css的polyfill
    'postcss-preset-env': { stage: 0, autoprefixer: { grid: true } },
  }
})
