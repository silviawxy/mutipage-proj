const qs = require('qs');
const config = {
    csr:{
        entry:{
            index:['./src/vue/csr/index.js']
        },
        template:'./src/vue/csr/index.html'
    },
    HOC:{
        entry:{
            index:['./src/react/HOC/index.js']
        },
        template:'./src/react/index.html'
    },
    productTb:{
        entry:{
            index:['./src/react/productTb/index.js']
        },
        template:'./src/react/index.html'
    },
    reactReduxDemo:{
        entry:{
            index:['./src/react/reactReduxDemo/index.js']
        },
        template:'./src/react/index.html'
    }
}
let projectName = qs.parse(JSON.parse(process.env.npm_config_argv).remain.join('&'))['proj']
if(!projectName){
    throw new Error('请指定项目名！详情请查阅markdown文件');
}

const {entry,template} = config[projectName];
module.exports = {
    config,
    entry,
    template
}