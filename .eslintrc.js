module.exports = {
  root: true,
  parser: 'typescript-eslint-parser',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    amd: true,
    node: true
  },
  settings : {
    react: {
      pragma: "React",  // Pragma to use, default to "React"
      version: "999.999.999", // React version. "detect" automatically picks the version you have installed.
    },
    propWrapperFunctions: [
        // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
        "forbidExtraProps",
        {property: "freeze", object: "Object"},
        {property: "myFavoriteWrapper"}
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {name: "Link", linkAttribute: "to"}
    ]
  },
  parserOptions: {
    ecmaFeatures: { // 使用的额外的语言特性
      jsx: true
    },
    ecmaVersion: 6, // ECMAScript 版本
    sourceType: 'module'
  },
  plugins: [
    "react-hooks",
    'react',
    'typescript'
  ],
  rules: {
    /* react */
    "react-hooks/rules-of-hooks": "error",
    "react/no-unsafe":2,
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
    "react/no-deprecated":2,
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
    'no-irregular-whitespace': 0, // 禁止在字符串和注释之外不规则的空白
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
}
