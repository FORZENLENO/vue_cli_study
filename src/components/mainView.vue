<template>
    <div id="bg">
        <img alt="Vue logo" src="../assets/logo.png">
        <hr>
        超大背景板！
        <router-view id="rv"></router-view>
        <button id="tt" @click="tt()">切换</button>
        <div class="fa">
            <son psMsg="父亲发送的内容：叫爸爸" @transfer="getUser"></son>
            <p>{{msg}}</p>
            <p>父组件接手到的内容：{{username}}</p>
        </div>
    </div>
</template>

<script lang=''>

 import son from './son'

    export default {
        name: 'mainView',
        components: {
            son
        },
        data:()=>{
            return{
                val:false,
                msg:'父组件',
                username:'',
            }
        },
        methods:{
            tt(){
                if(this.val==true){
                    this.$router.push('/a');
                    window.console.log(this.val)
                    return this.val=!this.val;
                    
                }else{
                    this.$router.push('/hello');
                    window.console.log(this.val)  
                    return this.val=!this.val;
                     
                }
            },
            getUser(msg){
              this.username=msg  
            }
        }
    } 
</script>

<style scoped>
    #bg{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        margin: 0px 0px 0px 0px;
        height: 100%;   
        background-color: aqua
    }
    #rv{
        margin-top: 50px;
    }
    #tt{
        margin-top: 50px;
        margin-bottom: 20px;
    }
    .fa{
        border: 1px red solid;
        width: 550px;
        margin: 0 auto
    }
</style>