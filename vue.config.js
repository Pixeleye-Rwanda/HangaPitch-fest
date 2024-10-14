const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    const imgRule = config.module.rule('images');

    imgRule.use('image-webpack-loader').loader('image-webpack-loader').options({
      mozjpeg: {
        progressive: true,
        quality: 75,
      },
      // Options for other image formats
      optipng: {
        enabled: true, // you can disable the optipng
      },
      pngquant: {
        quality: [0.65, 0.90],
        speed: 4,
      },
      gifsicle: {
        interlaced: false,
      },
      webp: {
        quality: 75,
      },
    });
  },

})

