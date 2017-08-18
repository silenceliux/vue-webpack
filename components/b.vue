<template>
    <div>
        <div class="b" v-on:click="getUser">{{msg}}</div>
        <div>{{propsData}}</div>
    </div>

</template>
<script>
import {detail} from '../config/list.js'
export default{
    data () {
        return {
            msg:"这是b部分这是b部分这是b部分这是b部分这是b部分"
        }
    },
    methods:{
      getUser:function(){
          this.$emit("transferUser","this userName")
      }
    },

    props:['propsData']
}

</script>
<style>
    .b{
        color: red;
    }
</style>