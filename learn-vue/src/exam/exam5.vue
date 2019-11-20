<template>

  <div id="app">

    <!-- App.vue -->
    <h1>v-once</h1>
    <div>{{ message }}</div>
<!--    点击修改消息不会改变-->
    <div v-once>{{ message }}</div>
    <button @click="changeMessage">修改消息</button>

  </div>

</template>

<script>
    export default {
        name: 'exam5',
        data () {
            return {
                message: 'Hello Vue (^_^)'
            }
        },
        methods: {
                changeMessage () {
                    this.message = 'Hello, 大漠 !'
                }
            }
        }


</script>

<style scoped>

</style>
