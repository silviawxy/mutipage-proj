import VueRouter from 'vue-router';
const routes = [
    // {
    //     path:'/',
    //     name:'index',
    //     component:()=>import(/* webpackChunkName:"" */ './App.vue')
    // },
    {
        path:'/foo',
        name:'foo',
        component:()=>import(/* webpackChunkName:"" */ './views/Foo.vue')
    },
    {
        path:'/bar',
        component:()=>import(/* webpackChunkName:"" */ './views/Bar.vue')
    },
    {
        path:'/baz',
        component:()=>import(/* webpackChunkName:"" */ './views/Baz.vue')
    }
];
export default new VueRouter({
    routes
});