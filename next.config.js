const withCSS = require('@zeit/next-css')
const path = require('path')

module.exports = withCSS({
  cssModules: false,
  distDir: '../build',
  webpack: config => {
    config.node = {
      fs: 'empty'
    }

    const aliases = ['components', 'pages', 'static']

    aliases.forEach(
      alias =>
        (config.resolve.alias[alias] = path.join(__dirname, 'app', alias))
    )

    return config
  }
})
