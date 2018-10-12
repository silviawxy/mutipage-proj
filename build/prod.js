const webpack = require('webpack'), 
    baseConfig = require('./webpack.base.conf.js'),
    merge = require('webpack-merge'),
    cleanWebpackPlugin = require('clean-webpack-plugin'),
    htmlWbpackPlugins = require('html-webpack-plugin'),
    {template} = require('./config.js'),
    path = require('path');
// console.log(JSON.stringify(config));
// console.log(path.resolve(__dirname,'../'),'root');
const prodConfig = {
    mode:'production',
    plugins:[
        // 打包前自动删dist目录
        new cleanWebpackPlugin(['dist'],{
            root:path.resolve(__dirname,'../')
        }),
        new htmlWbpackPlugins({
            template,
            minify:{
                minifyCSS:true,
                minifyJS:true
            }
        })
    ]
};

const webpackConfig = merge(baseConfig,prodConfig);
webpack(webpackConfig,(err,stats)=>{
    if(err||stats.hasErrors()){
        console.log('build fail');
    }
    console.log('build sucessful')
})

