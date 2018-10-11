const webpack = require('webpack'),
    baseConfig = require('./webpack.base.js'),
    webpackDevServer = require('webpack-dev-server'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    merge = require('webpack-merge'),
    path = require('path');

// const server = express();
const devConfig = {
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}
const webpackConfig = merge(baseConfig,devConfig);
const devServerOption = {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot:true,
    stats:{
        colors:true
    },
    host:'localhost'
};
webpackDevServer.addDevServerEntrypoints(webpackConfig, devServerOption);
const compiler = webpack(webpackConfig);

const server = new webpackDevServer(compiler,devServerOption);
server.listen(2333,'127.0.0.1',()=>{
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