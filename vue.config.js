const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false, //关闭语法检查
  transpileDependencies: true,
  devServer: {
    host: '192.168.0.106',
    port: 8080,
    https: false,
    hot: false,
    //代理跨域
    proxy: {
      '/api': {
        target: 'http://localhost:8888/',
      }
    },
  },
})
