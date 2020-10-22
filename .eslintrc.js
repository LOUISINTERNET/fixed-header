// {
//     "env": {
//         "browser": true,
//         "commonjs": true,
//         "es6": true,
//         "node": true
//     },
//     "extends": "eslint:recommended",
//     "parserOptions": {
//         "sourceType": "module"
//     },
//     "rules": {
//         "indent": [
//             "error",
//             4
//         ],
//         "linebreak-style": [
//             "error",
//             "unix"
//         ],
//         "quotes": [
//             "error",
//             "single"
//         ],
//         "semi": [
//             "error",
//             "always"
//         ]
//     }
// }

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['plugin:prettier/recommended', 'prettier/standard'],
  plugins: ['prettier'],
  rules: {
    'standard/computed-property-even-spacing': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
  },
}
