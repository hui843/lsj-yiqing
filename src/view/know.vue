<template>
    <div id="app">
        <div class="one">
            <span @click="a()">&lt;</span>
            <h1>防疫知识</h1>
        </div>
        <div class="two">
            <img src="../assets/img/08.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "know",
        methods:{
            a(){
                this.$router.push({path:'/'})
            }
        }
    }
</script>

<style scoped>
    #app{
        width: 100%;
        border: 1px solid white;
        margin-top: -60px;
    }
    .one{
        position: fixed;
        margin-top: -2px;
        width: 100%;
        height: 100px;
        z-index: 5;
        background-color: white;
    }
    .one span{
        float: left;
        font-size: 60px;
        margin-top: 20px;
    }
    .two{
        width: 100%;
        margin-top: 100px;
        z-index: 1;
    }
    .two img{
        width: 100%;
        height: 100%;
    }
</style>
