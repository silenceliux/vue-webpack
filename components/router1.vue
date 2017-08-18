<template>
    <div class="firstP">
        firstPage
        <span>{{ this.$route.params.id }}</span>
    </div>
</template>
<style>
.firstP{
    color:red;
}
</style>
<script>

export default{
    created:function(){
        console.log(this.$route.params.id)
    }
}

</script>



