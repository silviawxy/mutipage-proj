const
    path = require('path'),
    config = require('./config.js'),
    qs = require('querystring'),
    {entry} = require('./config.js');
// console.log('argv',process.argv);
// console.log('node_env',process.env.NODE_ENV);
// console.log('script',process.env.npm_lifecycle_script);
// console.log('type',process.env.type);
// fs.writeFileSync('input.json',JSON.stringify(process.env));


// let args = Array.from(process.argv);

// let projectName = process.argv.includes('')
// projectName = 'csr';
// let {entry,template} = config[projectName];
let baseConfig = {
    entry,
    output:{
        filename:'[name].[hash].js'
    },
    module:{
        rules:[
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
            // }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 在 webpack 1 中使用 'vue/dist/vue.common.js'
        },
        extensions:['.js','.jsx']
    },
    plugins:[
        
    ]
}
module.exports = baseConfig;