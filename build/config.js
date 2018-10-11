let config = {
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
module.exports = config;