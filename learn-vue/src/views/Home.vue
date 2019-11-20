<template>
  <div class="home">

    <el-card class="box-card">

      <div slot="header" class="cf">
        <span id="sp1">vue指令集</span>
      </div>

      <div v-for="(item,index) in items" v-on:click="changeFont(index)" :key="index"
           v-bind:class="{font:i===index}"  class="text item">

       <span v-if="item.flag"  >{{ item.message}}</span>


      </div>

    </el-card>

  </div>
</template>

<script>

    // @ is an alias to /src

export  default {

    name:'home',

    created: function () {

        this.$emit('header',true)

    },
    data() {

        return {
            items: [
                {message: 'v-text',flag:true},
                {message: 'v-html',flag:true},
                {message: 'v-pre',flag:true},
                {message: 'v-cloak',flag:true},
                {message: 'v-once',flag:true},
                {message: 'v-if',flag:true},
                {message: 'v-else',flag:true},
                {message: 'v-else-if',flag:true},
                {message: 'v-show',flag:true},
                {message: 'v-for',flag:true},
                {message: 'v-bind',flag:true},
                {message: 'v-model',flag:true},
                {message: 'v-on',flag:true}

            ],
            i:0
        }
    },
    // 方法
    methods:{
        changeFont(index){
            this.i=index
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
  }

  #sp1{
    font-size: 2em;
    font-weight: bold;

  }

  .font{
    color: blue;
    font-size:1.5em;
    font-weight: bold;
  }

</style>

