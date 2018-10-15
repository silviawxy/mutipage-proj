<template>
<div>
    <h2>{{$t('hello')}} ,{{name}}</h2>
</div>
</template>
<script>
    export default {
        name:'app',
        data(){
            return {
                name:'baz'
            }
        }
    }
</script>