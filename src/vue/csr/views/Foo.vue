<template>
<div>
    <h2>{{$t('hello')}} ,{{name}}</h2>
    <select v-model="lang" @Change="languageChane">
        <option :value ="option" v-for="(option,index) in options" :key="index">{{option}}</option>
    </select>
</div>
</template>
<script>
import {loadLanguageAsync} from '../setup/i18n-setup'
    export default {
        name:'app',
        data(){
            return {
                name:'foo',
                options:[
                    'cn',
                    'en',
                    'ja'
                ],
                lang:'cn'
            }
        },
        methods:{
            languageChane(){
                console.log(11);
                loadLanguageAsync(this.lang);
            }
        }
    }
</script>