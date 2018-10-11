const webpack = require('webpack'), 
    baseConfig = require('./webpack.base.conf.js'),
    merge = require('webpack-merge'),
    cleanWebpackPlugin = require('clean-webpack-plugin'),
    htmlWbpackPlugins = require('html-webpack-plugin'),
    {template} = require('./config.js'),
    path = require('path');

const prodConfig = {
    mode:'production',
    plugins:[
        // new cleanWebpackPlugin(path.resolve(__dirname,'../dist')),
        new cleanWebpackPlugin(['dist'],{
            root:path.resolve(__dirname,'../')
        }),
        new htmlWbpackPlugins({
            template,
            minify:true
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

