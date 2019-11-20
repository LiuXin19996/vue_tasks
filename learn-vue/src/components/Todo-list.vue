<template>

  <div>

    <el-card class="box-card">
      <div slot="header" class="cf">
        <span id="sp1">VueX</span>
      </div>
      <div v-for="(item, index) in this.$store.getters.getState " :key="index"
           @click="finishHandler(item)" class="text item">

        <del v-if="item.done" class="del-todo-list">{{ item.text }}</del>
        <span v-else>{{ item.text }}</span>

      </div>
    </el-card>

  </div>

</template>

<script>
    export default {
        name: "Todo-list",
        mounted(){

            console.log("this.$store.state.list: "+ this.$store.state.list)

        },
        data() {
            return {
                inputTodoData: ''
            }
        },
        methods: {
            finishHandler(item) {
                item.done = !item.done;
            }
        }
    }
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .cf:before,
  .cf:after {
    display: table;
    content: "";
  }
  .cf:after {
    clear: both
  }

  .box-card {
    width: 100%;
    height: 100%;
  }

  #sp1{
    font-size: 2em;
    font-weight: bold;

  }

</style>
