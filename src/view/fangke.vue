<template>
    <div id="app">
        <div class="one">
            <span @click="a()">&lt;</span>
            <h1>我是访客</h1>
        </div>
        <div class="two">
            <div class="three">
                <div class="t-1">
                    <img src="../assets/img/02.png" alt="">
                </div>
                <div class="t-2">
                    <span>应疫情防控要求，请出入园区人员进行健康登记。个人信息不会对外泄露，请如实填写。</span>
                </div>
            </div>
        </div>
        <div class="tee">
            <span>.基本信息</span>
        </div>
        <div class="four">
            <div class="four-1">
                <label for=""  class="b">身份证号：</label>
                <input type="text" class="a" placeholder="填写18位身份证号（必填）" v-model="identity">
            </div>
            <hr style="border-bottom: none; border-right: none; border-left: none; border-top: 1px solid rgb(238,238,238);;"  />
            <div class="four-1">
                <label for=""  class="b">姓名：</label>
                <input type="text" class="a" style="width: 310px; height: 20px; position: relative; left: 31px" v-model="name">
            </div>
            <hr style="border-bottom: none; border-right: none; border-left: none; border-top: 1px solid rgb(238,238,238);;"  />
            <div class="four-1" >
                <label for=""  class="b">公司名称：</label>
                <input type="text" class="a" v-model="gonsi">
            </div>
            <hr style="border-bottom: none; border-right: none; border-left: none; border-top: 1px solid rgb(238,238,238);;"  />
            <div class="four-1">
                <label for=""  class="b">访问地址：</label>
                <input type="text" class="a" v-model="dizhi">
            </div>
            <hr style="border-bottom: none; border-right: none; border-left: none; border-top: 1px solid rgb(238,238,238);;"  />
            <div class="four-1">
                <label for="" class="b">手机号码：</label>
                <input type="text" class="a" v-model="haoma">
            </div>
            <hr style="border-bottom: none; border-right: none; border-left: none; border-top: 1px solid rgb(238,238,238);"  />
            <div class="four-1">
                <label for=""  class="b">体温是否正常：</label>
                <label for="" class="ZC"><input type="radio" name="four-1" value="正常" v-model="tiwen" style="width: 20px; height: 20px; position: relative; top: 5px;" checked >正常</label>
                <label for="" class="FR"><input type="radio" name="four-1" value="发热" v-model="tiwen" style="width: 20px; height: 20px; position: relative; top: 5px;">发热</label>
            </div>
        </div>
        <div class="five">
            <div class="fv-1" style="background-color: skyblue" @click="fangke()">
                申请访问
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "staff",
        data(){
            return{
                identity:'',
                name:'',
                gonsi:'',
                dizhi:'',
                haoma:'',
                tiwen:'',
                msg:''
            }
        },
        methods:{
            a(){
                this.$router.push({path:'/'})
            },
            fangke(){
                if(!this.identity){
                    this.msg = '身份证号不能为空！';
                    alert(this.msg)
                }else if(this.identity.length!==18){
                    this.msg = '身份格式错误，请重新输入';
                    alert(this.msg)
                }else if(!this.name){
                    this.msg = '请输入您的名字';
                    alert(this.msg)
                }else if(!this.gonsi){
                    this.msg = '请输入您的公司';
                    alert(this.msg)
                }else if(!this.dizhi){
                    this.msg = '请输入您的地址';
                    alert(this.msg)
                }else if(!this.haoma){
                    this.msg = '请输入您的号码';
                    alert(this.msg)
                }else if(this.tiwen==='发热'){
                    this.msg = '您的体温异常，禁止访问';
                    alert(this.msg)
                }else {
                    this.http.post('/api/visitor',{
                        identity:this.identity,
                        name:this.name,
                        gonsi:this.gonsi,
                        dizhi:this.dizhi,
                        haoma:this.haoma,
                        tiwen:this.tiwen
                    })
                        .then(res=>{
                            this.msg = res.data.msg;
                            alert(this.msg)
                        })
                }
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
        z-index: 1;
        margin-top: 100px;
        box-sizing: border-box;
        padding-top: 330px;
        width: 100%;
        height: 380px;
        background-image: url("../assets/img/09.jpg");
        background-size: 100%;
    }
    .three{
        margin: auto;
        border: 1px solid gainsboro;
        width: 90%;
        height: 100px;
        display: flex;
        z-index: 15;
        background-color: white;
    }
    .t-1{
        width: 20%;
        height: 100%;
    }
    .t-2{
        width: 80%;
        height: 100%;
        text-align: left;
        line-height: 40px;
    }
    .t-2 span{
        font-size: 24px;
    }
    .tee{
        width: 90%;
        height: 50px;
        margin:70px auto;
        /*border: 1px solid red;*/
    }
    .tee span{
        float: left;
        font-size: 35px;
    }
    .four{
        width: 90%;
        height: 450px;
        /*border: 1px solid blue;*/
        margin: -20px auto;
        position: relative;
        top: -20px;
        box-shadow: 0 0 20px 5px rgb(238,238,238) ;
    }
    .four-1{
        width: 450px;
        height: 50px;
        padding-top: 10px;
        /*border: 1px solid red;*/
        /*margin-top: 3px;*/
    }
    .a{
        width: 310px;
        height: 20px;
        margin-top: 10px;
        font-size: 20px;
        border: 0;
        outline: none;
        cursor: pointer;
    }
    .b{
        line-height: 17px;
        width: 100px;
        font-size: 20px;
        height: 45px;
        margin-left: 10px;
    }
    .five{
        width: 90%;
        height: 50px;
        margin: 10px auto;
        display: flex;
        justify-content: space-between;
    }
    .fv-1{
        line-height: 50px;
        width: 150px;
        height: 50px;
        font-size: 20px;
        color: white;
    }
</style>
