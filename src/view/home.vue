<template>
    <div id="app">
        <div class="one">
            <span>产业园区疫情防控管理系统</span>
        </div>
        <div class="two">
            <div class="b" id="a"></div>
            <div class="a">
                <div class="t-1"><img src="../assets/img/02.png" alt=""></div>
                <div class="t-2">
                    <span>应疫情防控要求，请出入社区人员进行将看登记。个人信息不会对外泄露，请如实填写</span>
                </div>
            </div>
            <div class="b" id="b"></div>
        </div>
        <div class="three">
            <div class="th-1">
                <div class="wo" @click="a()"><img src="../assets/img/03.png" alt=""></div>
                <div class="wo" @click="b()"><img src="../assets/img/04.png" alt=""></div>
            </div>
            <div class="th-1">
                <div class="wo" @click="c()"><img src="../assets/img/05.png" alt=""></div>
                <div class="wo" @click="d()"><img src="../assets/img/06.png" alt=""></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        methods:{
            a(){
                this.$router.push({path:'/staff'})
            },
            b(){
                this.$router.push({path:'/fangke'})
            },
            c(){
                this.$router.push({path:'/know'})
            },
            d(){
                this.$router.push({path:'/bianmin'})
            }
        }
    }
</script>

<style scoped>
    body{
        margin: 0;
        padding: 0;
    }
    #app{
        width: 100%;
        height: 820px;
        box-sizing: border-box;
        /*background-color: blue;*/
        margin-top: -60px;
        border: 1px white solid;
        position: relative;
    }
    .one{
        /*position: fixed;*/
        margin:0 auto;
        width: 100%;
        height: 500px;
        padding: auto;
        background-image: url("../assets/img/07.png");
        /*border: 1px yellowgreen solid;*/
    }
    .one span{
        /*position: fixed;*/
        color: white;
        line-height: 120px;
        font-size: 30px;
    }
    .two{
        margin: auto;
        /*position: absolute;*/
        width: 90%;
        height: 120px;
        /*box-sizing: border-box;*/
        display: flex;
        z-index: 2;
    }
    .a{
        width: 80%;
        height: 100%;
        display: flex;
        border: 1px blue solid;
    }
    .b{
        margin-top: 61px;
        width: 10%;
        height: 50%;
        border-top: 1px solid blue;
    }
    #a{
        border-left: 1px solid blue;
    }
    #b{
        border-right: 1px solid blue;
    }
    .t-1{
        width: 20%;
        height: 10%;
    }
    .t-1 img{
        margin-top: 20px;
    }
    .t-2{
        width: 80%;
        height: 100%;
        text-align: left;
        font-size: 23px;
        margin-top: 20px;
    }

    .three{
        margin: auto;
        width: 90%;
        height: 480px;
        border-left: 1px solid blue;
        border-right: 1px solid blue;
        border-bottom: 1px solid blue;
        z-index: 1;
    }
    .th-1{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-around;
    }

    .wo{
        /*width: 45%;*/
        /*height: 40%;*/
        margin: 20px;
    }
</style>
