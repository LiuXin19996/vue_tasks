<template>
  <div id="app">
    <!--插值语法-->
    <h3>{{msg}}</h3>
    <h3>{{1+1}}</h3>
    <h3>{{1>2?"真的":"假的"}}</h3>
    <div v-if="show">哈哈</div>
    <button v-on:click ="clickHandler">切换</button>
    <h3 v-show="isShow">我是一个三级标题</h3>
  </div>
</template>

<script>

    //vue的实例化对象
    //指令系统 v-*


    export default {
        name: "exam3",
        el: "#app",
        data() {
            return {
                msg: "今天学习Vue",
                msg2: "今天学习Vue2",
                show: false,
                isShow: true
            }
        },
        methods:{
            clickHandler(){
                this.show=!this.show
            }
        }
    }
</script>

<style scoped>

</style>
