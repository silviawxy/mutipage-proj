const 
    webpack = require('webpack'),
    baseConfig = require('./webpack.base.conf.js'),
    webpackDevServer = require('webpack-dev-server'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    merge = require('webpack-merge'),
    path = require('path'),
    opn = require('opn'),
    progressBarWebpackPlugin = require('progress-bar-webpack-plugin'),
    htmlWbpackPlugins = require('html-webpack-plugin'),
    {template} = require('./config.js');

// const server = express();
// console.log(template,'#####');
// const htmlWbpackPluginsConfig = {
//     filename: path.resolve(__dirname,'../',template)
// }
// console.log(JSON.stringify(htmlWbpackPluginsConfig),'$$$$$');
// console.log(JSON.stringify({template}),'@@@@@');
const devConfig = {
    mode:'development',
    plugins:[
        new htmlWbpackPlugins({
            template
        }),
        new webpack.NamedModulesPlugin(),
        // 热加载
        new webpack.HotModuleReplacementPlugin(),
        // 进度条
        // new progressBarWebpackPlugin({
        //     callback:function(){
        //     }
        // })
    ]
}
const webpackConfig = merge(baseConfig,devConfig);
const devServerOption = {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    // 热加载
    hot:true,
    stats:{
        colors:true
    },
    host:'localhost'
};
// 热加载
webpackDevServer.addDevServerEntrypoints(webpackConfig, devServerOption);
const compiler = webpack(webpackConfig);

const server = new webpackDevServer(compiler,devServerOption);
server.listen(2333,'127.0.0.1',()=>{
    // 自动打开浏览器
    // opn('http://127.0.0.1:2333');
    console.log('starting server on http://127.0.0.1:2333');
})
// webpack(baseConfig,(err,stats)=>{
//     if(err || stats.hasErrors()){
//         console.log('compiler error!');
//     }
// });
// server.listen(2333,()=>{
//     console.log('csr server is listening on port 2333')
// })