module.exports = {
  root: false,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "space-before-function-paren": 0,//函数和关键字间可以允许没有空格
    'space-before-blocks':0,//左括号前可以没有空格
    'indent':['off',2],
  }
}
