<template>
    <div class="a">
        <div v-for="item in list.items">{{item.name}}</div>
        <bvue :propsData = "propsMsg" @transferUser="getUser"></bvue>
        <div>{{user}}</div>
    </div>

</template>
<script>
import bvue from './b.vue'
import {list} from '../config/list.js'
export default {
    data () {
        return {
            list:list,
            propsMsg:"这是向子组件传的数据",
            user:""
        }
    },
    methods:{
        getUser(msg){
            this.user = msg;
        }
    },
    components: {bvue}
}
</script>

<style>
.a{
    color: blue;
}
</style>