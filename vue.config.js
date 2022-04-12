process.env.VUE_APP_VERSION = require('./package.json').version
module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': 'blur',
                        'success-color': 'green',
                        'warning-color': 'yellow',
                        'error-color': 'red',
                        'link-color': '#1DA57A',
                        'border-radius-base': '2px',
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
    productionSourceMap: false,
    devServer: {
        // 使用 npm run serve 之后是否自动在浏览器中打开项目
        open: true,
        // 域名
        host: '0.0.0.0',
        // 端口号
        port: '8080',
        // 当为true时浏览器会给出一些警告
        https: false,
        // 热更新
        hot: true,
        // 是否全屏显示编译的警告或错误信息
        overlay: {
            warnings: true,
            errors: true,
        },
        // 如果前端应用和后端 API 服务器没有运行在同一个主机上, 你需要在开发环境下将 API 请求代理到 API 服务器. 这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。Type: Object || String
        proxy: {
            '/api': {
                // 接口域名
                target: 'http://127.0.0.1:3000',
                // 是否跨域
                changeOrigin: true,
                ws: true,
                // 重写路径 
                pathRewrite: {
                    "^/api": "/"
                }
            },
        },
        before: app => {
            app.get('/api', (req, res) => {
                console.log('哈哈哈哈哈', req, res)
                // res.json(goods);
            });
        },
    },
};