const webpack = require('webpack'), 
    baseConfig = require('./webpack.base.conf.js'),
    merge = require('webpack-merge'),
    cleanWebpackPlugin = require('clean-webpack-plugin');
const prodConfig = {
    mode:'production',
    plugins:[
        new cleanWebpackPlugin()
    ]
};
const webpackConfig = merge(baseConfig,prodConfig);
webpack(webpackConfig,()=>{

})

