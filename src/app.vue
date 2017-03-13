<template>
<div>
    <div v-for="item in items">{{item.name}}</div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      items:[
      {name:1},
      {name:2},
      {name:3},
      {name:4},
      ]
    }
  }
}
</script>

<style>
html{
    background: blue;
}
</style>