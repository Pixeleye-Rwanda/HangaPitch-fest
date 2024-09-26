const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // chainWebpack: config => {
  //   config.module
  //     .rule('images')
  //     .use('image-webpack-loader')
  //     .loader('image-webpack-loader')
  //     .options({
  //       mozjpeg: { progressive: true, quality: 65 },
  //       optipng: { enabled: true },
  //       pngquant: { quality: [0.65, 0.90], speed: 4 },
  //       gifsicle: { interlaced: false },
  //       webp: { quality: 75 }
  //     });
  // }

})

