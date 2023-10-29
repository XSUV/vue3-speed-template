// @see: https://www.prettier.cn
module.exports = {
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }" (true：有，false：没有)
  singleQuote: true, // 使用单引号 (true：单引号，false：双引号)
  arrowParens: 'avoid', // (x) => {} 箭头函数参数只有一个时是否要有小括号 (avoid：省略括号，always：不省略括号)
  trailingComma: 'none', // 多行时尽可能打印尾随逗号 可选值"<none|es5|all>"
  semi: false // 结尾不用分号 (true：有，false：没有)
}
