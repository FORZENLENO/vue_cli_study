<template>
    <div id="bg">
        <img alt="Vue logo" src="../assets/logo.png">
        <hr>
        超大背景板！
        <router-view id="rv"></router-view>
        <button id="tt" @click="tt()">切换</button>
    </div>
</template>

<script lang=''>
    export default {
        name: 'mainView',
        data:()=>{
            return{
                val:true,
            }
        },
        methods:{
            tt(){
                if(this.val==true){
                    this.$router.push('/');
                    window.console.log(this.val)
                    return this.val=!this.val;
                    
                }else{
                    this.$router.push('/hello');
                    window.console.log(this.val)  
                    return this.val=!this.val;
                     
                }
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
    }
</style>