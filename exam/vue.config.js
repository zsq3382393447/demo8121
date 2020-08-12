module.exports = {
  publicPath:process.env.NODE_ENV==="production"?"./":"/",
  outputDir:"dist",//打包后 输出路径
  assetsDir:"assets",// 存放静态资源的
  devServer:{//配置服务器相关的
    proxy:{//proxy代理
      '/api':{//引用axios的地址
        target:"https://api.baxiaobu.com/index.php/home",//接口路径
        changeOrigin:true,//是否跨域
        pathRewrite:{//重写路径
          '^/api':""
        }
      }
    }
  }
};
// module.exports = {
//   publicPath:process.env.NODE_ENV==="production"?"./":"/", // 区分生产和开发环境当前路径
//   outputDir:"dist",//打包后，输出路径
//   assetsDir:"assets",//存放静态资源的
//   devServer: {//配置服务器相关的
//     proxy: {//proxy代理
//       "/api": { //引入axios的地址
//         target: "https://api.baxiaobu.com/index.php/home", //接口路径
//         ws: true,
//         changeOrigin: true, //是否跨域
//         pathRewrite: { //重写路径
//           "^/api": "",
//         },
//       },
//     },
//   },
// }