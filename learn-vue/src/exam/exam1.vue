<template>

  <div id="app">
    <!--插值语法-->
    <h3>{{msg}}</h3>
    <h3 v-text="msg2"> </h3>


    <h3>{{1+1}}</h3>
    <h3>{{1>2?"真的":"假的"}}</h3>
    <div v-if="show">哈哈</div>
  </div>

</template>

<script>
    export default {
        name: "exam1",
        el:"#app",
        data() {
            return {
                msg: "今天学习Vue",
                msg2: "今天学习Vue2",
                show: true
            }
        }
    }

</script>

<style scoped>

</style>
