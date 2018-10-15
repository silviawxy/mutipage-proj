import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App';
import router from './router'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale:'cn',
    messages:{
        en:{
            hello:"hello"
        },
        cn:{
            hello:"你好",
        },
        ja:{
            hello:"こんにちは、"
        }
    }
})
new Vue({
    i18n,
    router,
    el:'#app',
    render:h=>h(App)
})
// var app = new Vue({
//     el: '#app',
//     data:{
//         title:'my love',
//         loves:['sleep','swim','movie','photo','cookee','cat']
//     },
//     template:
//     `
//         <div>
//             <h2>{{this.title}}</h2>
//             <ul>
//                 <li v-for="(item,index) in loves" :key="index">{{item}}</li>
//             </ul>
//         </div>
//     `
// });