<template>
  <div id="app">
    <!--插值语法-->
    <h3>{{msg}}</h3>
    <h3>{{1+1}}</h3>
    <h3>{{1>2?"真的":"假的"}}</h3>
    <div v-if="show">哈哈</div>
    <div v-else>呵呵</div>   //如果哈哈显示，呵呵就不显示，如果哈哈不显示，呵呵就显示。 相当于if-else

    <button v-on:click ="clickHandler">切换</button>
  </div>
</template>

<script>

    export default {
        name: "exam2",
        el:"#app",
        data(){
            return {

                msg: "今天学习Vue",
                msg2: "今天学习Vue2",
                show: false
            }
        },
        methods:{
            clickHandler(){
                this.show=!this.show
            }
        },
        mounted() {

            console.log(app);
            console.log(app.$el);
            console.log(app.$data.msg);  //今天学习Vue
            console.log(app.msg)        //今天学习Vue
        }
    }


</script>

<style scoped>

</style>
