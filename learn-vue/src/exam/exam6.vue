<template>

  <div id="app">

    <div id="my">
      <!--单个样式引用,这里是直接写的data里面变量的名称-->
      <div :class="varStyle">这里是使用v-bind改变样式</div>
      <!--单个样式引用，双引号加单引号，单引号里面是样式的名称，这种方式可以不在data里面写变量-->
      <div :class="'bindStyle2'">直接引用样式的名称，不需要在data里面定义变量</div>
      <!--多个样式引用 使用数组的方式-->
      <div :class="[style1,style2]">这里是同时使用多个样式</div>
      <!--条件判断 格式：样式名：判断条件 注意：样式名不能用变量-->
      <div :class="{'colorStyle2':flag}">条件判断</div>
      <!--三目运算符 flag为真显示style2变量对应的样式，否则显示style1变量对应的样式-->
      <div :class="flag?style2:style1">三目运算符</div>
    </div>

  </div>

</template>

<script>
    export default {
        name: 'exam6',
        el:"#my",// el即element，表示挂载的元素，不能挂载在HTML和body元素上面
        // data表示数据,data中可以是各种数据格式
        data() {
            return {
                flag: true,
                varStyle: "bindStyle", //值是样式的名称
                style1: "colorStyle",
                style2: "colorStyle2"
            }
        }
     }


</script>

<style scoped>

  .colorStyle {
    color: #ff6600;
  }
  .colorStyle2{
    margin-top: 10px;
    background-color: chartreuse;
    border: 1px solid blue;
  }
  .bindStyle {
    margin-top: 5px;
    color: red;
  }
  .bindStyle2 {
    margin-top: 5px;
    color: red;
    background-color: green;
  }

</style>
