<template>
    <div class="a">
        <div v-for="item in items">{{item.name}}</div>
        <bVue></bVue>
    </div>

</template>
<script>
import bVue from './b.vue'
export default {
    data () {
        return {
            items:[{name:1},{name:2},{name:3},{name:4}]
        }
    },
    components: {bVue}
}
</script>

<style>
.a{
    color: blue;
}
</style>