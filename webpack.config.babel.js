const path = require('path')

module.exports = () => {
  return {
    mode: 'production',
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'fixed-header.js',
      libraryTarget: 'umd',
      globalObject: 'this',
      libraryExport: 'default',
      library: 'fixedHeader',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  }
}
