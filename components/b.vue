<template>
    <div class="b">{{msg}}</div>
</template>
<script>
import {detail} from '../config/list.js'
export default{
    data () {
        return {
            msg:"这是b部分"
        }
    }
}
</script>
<style>
    .b{
        color: red;
    }
</style>