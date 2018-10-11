import Vue from 'vue';
var app = new Vue({
    el: '#app',
    data:{
        title:'my love',
        loves:['sleep','swim','movie','photo','cookee','cat']
    },
    template:
    `
        <div>
            <h2>{{this.title}}</h2>
            <ul>
                <li v-for="(item,index) in loves" :key="index">{{item}}</li>
            </ul>
        </div>
    `
});