<template>
    <div class="secondP">
        secondPage
        <span>{{ this.$route.params.id }}</span>
    </div>
</template>
<style>
.secondP{
    color:blue;
}
</style>
<script>
export default{
    created:function(){
        console.log(this.$route.params.id);
    }
}
</script>