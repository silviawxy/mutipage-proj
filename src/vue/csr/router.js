import VueRouter from 'vue-router';
import {loadLanguageAsync} from './setup/i18n-setup'
const routes = [
    // {
    //     path:'/',
    //     name:'index',
    //     component:()=>import(/* webpackChunkName:"" */ './App.vue')
    // },
    {
        path:'/foo/:lang',
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
const router = new VueRouter({
    routes
});
router.beforeEach((to,from,next)=>{
    const lang = to.params.lang;
    loadLanguageAsync(lang);
    next();
})
export default router;