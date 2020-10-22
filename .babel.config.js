module.exports = (api) => {
  console.log('here')
  api.cache(true)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: 3,
          debug: true,
          bugfixes: true,
        },
      ],
    ],
  }
}
