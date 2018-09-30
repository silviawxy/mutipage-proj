var htmlWbpackPlugins = require('html-webpack-plugin'),
    path = require('path'),
    config = require('./config.js'),
    qs = require('querystring');
let projectName = qs.parse(JSON.parse(process.env.npm_config_argv).remain.join('&'))['proj']
if(!projectName){
    throw new Error('请指定项目名！详情请查阅markdown文件');
}
let {entry,template} = config[projectName];
let baseConfig = {
    mode:'development',
    entry,
    output:{
        filename:'[name].[chunkhash].js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 在 webpack 1 中使用 'vue/dist/vue.common.js'
        }
    },
    plugins:[
        new htmlWbpackPlugins({
            template
        })
    ]
}
module.exports = baseConfig;