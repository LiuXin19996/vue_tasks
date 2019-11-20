<template>

  <div id="app">
    <!-- App.vue -->
    <h1>v-html</h1>
    <div>{{ rawHtml }}</div>
    <div v-html="rawHtml"></div>

  </div>

</template>

<script>
    export default {
        name: 'exam4',
        data () {
            return {
                rawHtml: 'Hello, <strong>Vue (^_^) </strong>'
            }
        }
    }

</script>

<style scoped>

  .box1{
    width: 100px;
    height: 100px;
    background-color: red;
  }
  .box2{
    width: 100px;
    height: 100px;
    background-color: green;
  }

</style>
