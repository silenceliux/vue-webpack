<template>
    <div class="a">
        <div v-for="item in items">{{item.name}}</div>
        <bvue></bvue>
    </div>

</template>
<script>
import bvue from './b.vue'
export default {
    data () {
        return {
            items:[{name:1},{name:2},{name:3},{name:4}]
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