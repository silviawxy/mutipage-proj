const
    path = require('path'),
    config = require('./config.js'),
    qs = require('querystring'),
    {entry} = require('./config.js'),
    VueLoaderPlugin = require('vue-loader/lib/plugin');
// console.log(path.resolve(__dirname,'../dist'))
module.exports = {
    entry,
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'[name].[hash].js'
    },
    module:{
        rules:[
            {
                test:/.vue$/,
                use:{
                    loader:'vue-loader'
                }
            },
            {
                // 需要大括号，否则无法匹配到json文件的坑
                test:/.(js|jsx)$/,
                // loader:'babel-loader'
                // use:['babel-loader']
                use:{
                    loader:'babel-loader'
                    // ,
                    // options:{
                    //     presets:['react','es2015','stage-0']
                    // }
                },
                exclude:/node_modules/
                
            },
            {
                test:/.scss$/,
                use:[{loader:'style-loader'},{loader:'css-loader'},{loader:'sass-loader'}]
                // use:{
                //     loader:''
                // }
            }
            // ,{
            //     test:/.json$/,
            //     use:{
            //         loader:'json-loader'
            //     }
            // },
            ,{
                resourceQuery:/blockType=i18n/,
                type:'javascript/auto',
                use:{
                    loader:'@kazupon/vue-i18n-loader'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 在 webpack 1 中使用 'vue/dist/vue.common.js'
        },
        extensions:['.js','.jsx','.vue']
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}