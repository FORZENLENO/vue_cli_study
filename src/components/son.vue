<template>
    <div class="son">
        <p>子组件发送的内容：{{sonMsg}}</p>
        <p>子组件接收的内容：{{psMsg}}</p>
        <button @click="setUser">传值</button>
    </div>
</template>

<script lang=''>
    export default {
        name:'son',
        data() {
            return {
                sonMsg:'这是是还是是是是子组件你懂吗懂吗',
                user:'子组件传出的内容',
            };
        },
        props:['psMsg'],
        methods:{
            setUser:function(){
                this.$emit('transfer',this.user)
            }
        }
    };
</script>

<style scoped>
    .son{
        border: 1px red solid;
        width: 500px;
        margin: 0 auto
    }
</style>