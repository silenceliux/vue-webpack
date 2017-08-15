<template>
    <div>
        <div class="b">{{msg}}</div>
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

    props:['propsData']
}

</script>
<style>
    .b{
        color: red;
    }
</style>