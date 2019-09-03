module.exports = {
    publicPath: "/",
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
    runtimeCompiler: true, // 运行时版本是否需要编译
    indexPath: 'index.html',    //指定生成的index.html的输出路径，相对于outputDir。也可以是一个绝对路径。
    productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
    devServer: {
        host: "localhost",//要设置当前访问的ip 否则失效
        open: true, //浏览器自动打开页面
        https: false,
        hotOnly: false,
        port: 8080,
        proxy: {
            '/': {
                // target: process.env.VUE_APP_BASE_API || 'http://sso.banjiajia.com',
                target: process.env.VUE_APP_BASE_API || 'https://pro.kongjiancool.com',
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    '^/': ''
                },
            }
        },
        before: app => { }
    }
}