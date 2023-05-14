module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    'stylelint-prettier/recommended',
    'stylelint-config-prettier'
  ],
  plugins: ['stylelint-order', 'stylelint-scss', 'stylelint-prettier'],
  overrides: [
    {
      // 为scss文件指定语法解析器
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss'
    }
  ],
  rules: {
    'declaration-block-trailing-semicolon': null,
    'color-function-notation': null,
    'selector-class-pattern': null
  }
}
