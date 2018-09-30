const webpack = require('webpack'),
    baseConfig = require('./webpack.base.js'),
    webpackDevServer = require('webpack-dev-server'),
    webpackDevMiddleware = require('webpack-dev-middleware');

// const server = express();
const compiler = webpack(baseConfig);
const devServerOption = Object.assign({},baseConfig.devServer,{
    stats:{
        colors:true
    }
})
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