module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      "viewportWidth": 750,
      "unitPrecision": 5,
      "propList":['*', '!font*'],
      "minPixelValue": 1,
      "selectorBlackList": ['ignore']
    }
  }
}
