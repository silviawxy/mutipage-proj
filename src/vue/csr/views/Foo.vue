<template>
<div>
    <h2>{{$t('hello')}} ,{{name}}</h2>
    <select v-model="$i18n.locale">
        <option :value ="option" v-for="(option,index) in options" :key="index">{{option}}</option>
    </select>
</div>
</template>
<script>
    export default {
        name:'app',
        data(){
            return {
                name:'foo',
                options:[
                    'cn',
                    'en',
                    'ja'
                ]
            }
        }
    }
</script>