const path = require('path');
const webpack = require('webpack');
const resolve = dir => path.join(__dirname, dir)
// function resolve (dir) {
//   return path.join(__dirname, dir)
// }
// // const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV === 'production'
// const autoprefixer = require('autoprefixer');
// const pxtoviewport = require('postcss-px-to-viewport');

module.exports = {
  runtimeCompiler: true,
  lintOnSave:false,
  outputDir: 'dist',
  chainWebpack: config => {
    config.resolve.alias
        .set('@', resolve('src'))
      },
  // publicPath: process.env.NODE_ENV === 'production' ? '/mobile/' : '/',
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         autoprefixer(),
  //         pxtoviewport({
  //           viewportWidth: 750
  //         })
  //       ]
  //     }
  //   }
  // },
  // baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://118.31.105.153:80/', // 配置目标的地址
  //       ws: true, // proxy websockets
  //       changeOrigin: true, // needed for virtual hosted sites
  //       pathRewrite: {
  //         '^/api': '' // rewrite path
  //       }
  //     }
  //   } // 配置多个代理
  // },
  productionSourceMap: false,
  assetsDir: 'static',
  publicPath: './',
  devServer: {
    open: false,
    port: 8090,
    https: false,
    hotOnly: false,
    proxy: 
    {
      '/api': {
        target: 'http://192.168.0.112:8082/api',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // rewrite path
          // '‘这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替。
          // 比如我要调用’http://127.0.0.1:8000/index/’，直接写‘/api/index/’即可
        },
    }
  }
    
    // { // 配置跨域
    //   '/api': {
    //     target: 'https://test-ex-api.7peilian.com/v3/app/',
    //     // target: 'http://localhost:8088',
    //     ws: true,
    //     secure: false,
    //     changOrigin: true,
    //     pathRewrite: {
    //       '^api': ''
    //     }
    //   }
    // }
  },
  configureWebpack:{
    plugins: [
      // 　　new webpack.optimize.CommonsChunkPlugin('common.js'),
      new webpack.ProvidePlugin({
        $:"jquery",
  
        jQuery:"jquery",
  
        "window.jQuery":"jquery"
  
  })
      ]
  }

  // configureWebpack: {

  //      plugins: [
    
  //         new webpack.ProvidePlugin({
    
  //           $:"jquery",
    
  //           jQuery:"jquery",
    
  //           "windows.jQuery":"jquery"
    
  //         })
    
  //       ]
    
  //   }
   
  // chainWebpack: config => {
  //   config.entry.app = ['babel-polyfill', './src/main.js']

  //   // 修复HMR
  //   config.resolve.symlinks(true)
  //   // 修复 Lazy loading routes Error
  //   config.plugin('html').tap(args => {
  //     args[0].chunksSortMode = 'none'
  //     return args
  //   })
  // },
  // configureWebpack: config => {
  //   if (isProduction) {
  //     config.plugins.push(new CompressionWebpackPlugin({
  //       algorithm: 'gzip',
  //       test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
  //       threshold: 10240,
  //       minRatio: 0.8
  //     })
  //     ),
	//   config.externals = {
	//           // 'vue': 'Vue',
	//           // 'vue-router': 'router',
  //          //  'axios':'axios'
	//         }
  //   }
  //   config.resolve.alias = {
  //     '@': path.join(__dirname, '/src'),
  //     router: path.join(__dirname, '/src/router'),
  //     css: path.join(__dirname, '/src/assets/css'),
  //     api: path.join(__dirname, '/src/assets/api'),
  //     js: path.join(__dirname, '/src/assets/js'),
  //     icon: path.join(__dirname, '/src/assets/icon'),
  //     images: path.join(__dirname, '/src/assets/images'),
  //     components: path.join(__dirname, '/src/components'),
  //     views: path.join(__dirname, '/src/views'),
  //     context: path.resolve(__dirname, '../')
  //   }
  // }

}
