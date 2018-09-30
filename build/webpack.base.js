var htmlWbpackPlugins = require('html-webpack-plugin'),
    path = require('path'),
    config = require('./config.js'),
    qs = require('querystring'),
    fs = require('fs');
console.log('node_env',process.env.NODE_ENV);
console.log('script',process.env.npm_lifecycle_script);
console.log('type',process.env.type);
// fs.writeFileSync('input.json',JSON.stringify(process.env));
let projectName = qs.parse(JSON.parse(process.env.npm_config_argv).remain.join('&'))['proj']
if(!projectName){
    throw new Error('请指定项目名！详情请查阅markdown文件');
}
// projectName = 'csr';
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