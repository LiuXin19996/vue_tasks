<template>
  <div class="header">

    <div id="nav" >
      <router-link to="/home">首页</router-link> |
      <router-link to="/todo999">TodoList</router-link>|
      <router-link to="/card789">CardList</router-link>
    </div>

  </div>
</template>

<script>
    export default {
        name: 'app-header',
        data () {
            return {
            }
        },
        methods:{
        },
        created(){
        }
    }
</script>


<style>

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>

