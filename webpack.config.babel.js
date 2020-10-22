const path = require('path')

const createConfig = ({ name = '', esmodules = false } = {}) => {
  return {
    mode: 'production',
    entry: { 'fixed-header': './index.js' },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: `[name]${name}.js`,
      libraryTarget: 'umd',
      // globalObject: 'this',
      libraryExport: 'default',
      library: 'fixedHeader',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: 3,
                  targets: {
                    esmodules,
                  },
                },
              ],
            ],
            plugins: ['add-module-exports'],
          },
        },
      ],
    },
  }
}

module.exports = () => [
  createConfig({ esmodules: true }),
  createConfig({ name: '.polyfilled' }),
]
