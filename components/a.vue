<template>
    <div class="a">
        <div v-for="item in items">{{item.name}}</div>
        <bvue></bvue>
    </div>

</template>
<script>
import bvue from './b.vue'
import {list} from '../config/list.js'
export default {
    data () {
        return list
    },
    components: {bvue}
}
</script>

<style>
.a{
    color: blue;
}
</style>