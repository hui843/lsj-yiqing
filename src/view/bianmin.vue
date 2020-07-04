<template>
    <div class="app">
        <div class="one">
            <div><img src="../assets/img/10.png" alt=""></div>
            <div class="o-1">
                <img src="../assets/img/11.png" alt="">
                <div><input type="text"></div>
            </div>
            <div><img src="../assets/img/12.png" alt=""></div>
        </div>
        <div class="two">
            <img src="../assets/img/13.png" alt="">
        </div>
        <div class="three">
            <div class="t-1" @click="a()"><img src="../assets/img/14.png" alt=""></div>
            <div class="t-1" @click="a()"><img src="../assets/img/15.png" alt=""></div>
            <div class="t-1" @click="a()"><img src="../assets/img/16.png" alt=""></div>
            <div class="t-1" @click="a()"><img src="../assets/img/17.png" alt=""></div>
            <div class="t-1" @click="a()"><img src="../assets/img/18.png" alt=""></div>
            <div class="t-1" @click="a()"><img src="../assets/img/19.png" alt=""></div>
            <div class="t-1" @click="a()"><img src="../assets/img/20.png" alt=""></div>
            <div class="t-1" @click="a()"><img src="../assets/img/21.png" alt=""></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bianmin",
        methods:{
            a(){
                alert("便民服务热线17788157776，敬请等待服务更新")
            }
        }
    }
</script>

<style scoped>
    .app{
        width: 100%;
        height: 600px;
        border: 1px solid white;
        margin-top: -60px;
    }
    .one{
        /*border: 1px solid red;*/
        margin: 50px auto;
        width: 90%;
        height: 50px;
        display: flex;
        justify-content: space-between;
    }
    .o-1{
        width: 70%;
        height: 50px;
        background-color: lightgrey;
        display: flex;
    }
    .o-1 img{
        width: 50px;
        height: 50px;
    }
    .o-1 input{
        width: 60%;
        height: 45px;
        background-color: lightgrey;
        list-style: none;
        border: 0;
        outline: none;
    }
    .two{
        margin: auto;
        width: 90%;
    }
    .two img{
        width: 100%;
    }
    .three{
        width: 90%;
        margin: auto;
        height: 300px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .t-1{
        width: 40%;
        height: 150px;
    }
</style>
