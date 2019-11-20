<template>
  <div class="Card-list">

    <div class="block">
      <el-timeline v-for="(item, index) in users" :key="index">
        <el-timeline-item timestamp="2019/11/20" placement="top">
          <el-card>
            <h3>{{item.date}}</h3>
            <br/>
            <p>{{item.addr}}</p>

            <img :src="item.url"></img>

          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>





  </div>
</template>

<script>

  export  default {

      created: function () {

          this.$emit('header',true)

      },
      data(){

          return {
              users: [
                  {addr: '万里长城', date: '2019/11/20',url:require("../assets/万里长城.png")},
                  {addr: '黄山', date: '2019/11/20',url:require("../assets/黄山.png")},
                  {addr: '桂林', date: '2019/11/20',url:require("../assets/桂林.png")},
                  {addr: '故宫', date: '2019/11/20',url:require("../assets/故宫.png")},
              ]
          }


      }

  }

</script>

<style>

</style>
