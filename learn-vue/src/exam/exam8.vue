<template>

  <div id="my">
    <!--表单输入框 当inputValue的值为123的时候禁止输入-->
    <input type="text" v-model="inputValue" :disabled="inputValue==123">{{inputValue}}
    <!--复选框  v-model 当前的状态:true或者false-->
    <div>
      <input type="checkbox" v-model="chkState">当前选中状态:{{chkState | toShowCheckBoxState}}
    </div>
    <!--多个复选框 组  静态显示-->
    <div>
      <input type="checkbox" v-model="chkArray" value="0">唱歌
      <input type="checkbox" v-model="chkArray" value="1">跳舞
      <input type="checkbox" v-model="chkArray" value="2">打篮球
      <p>当前选中的value值:{{chkArray}}</p>
    </div>
    <!--复选框 动态显示-->
    <div>
      <ul>
        <li v-for="list in chkLists">
          <input type="checkbox" v-model="chkArray" :value="list.value">{{list.displayName}}
        </li>
      </ul>
    </div>
    <!--单选框 静态显示 -->
    <div>
      <input type="radio" v-model="rdoCheck" name="Gender" value="1">男
      <input type="radio" v-model="rdoCheck" name="Gender" value="2">女
      <p>{{rdoCheck}}+7788</p>
    </div>
    <!--单选框 动态显示-->
    <div>
      <ul>
        <li v-for="list in radioLists">
          <input type="radio" v-model="rdoCheck" :name="list.name" :value="list.value">{{list.displayName}}
        </li>
      </ul>
      <p>{{rdoCheck}}</p>
    </div>
    <!--下拉框 静态显示 -->
    <div>
      <select v-model="sectionValue">
        <option>苹果</option>
        <option>香蕉</option>
        <option>葡萄</option>
      </select>
      <p>{{sectionValue}}</p>
    </div>

    <!--下拉框 静态显示 -->
    <div>
      <select v-model="sectionValue1">
        <option value="0">苹果</option>
        <option value="1">香蕉</option>
        <option value="2">葡萄</option>
      </select>
      <p>{{sectionValue1}}</p>
    </div>

    <!--下拉框 静态显示 -->
    <div>
      <select v-model="sectionValue1">
        <option v-for="list in optionLists" :value="list.value">{{list.displayName}}</option>
      </select>
      <p>{{sectionValue1}}</p>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'exam8',
        el:"#my",
        data() {
            return {
                inputValue: "hello world",
                chkState: true, //默认为true
                chkArray: ["1"], //处理成组的复选框需要定义一个数组，对应每个CheckBox的value值,这里默认第二个选中
                chkLists: [{displayName: "科普读物", value: "0"},
                    {displayName: "中小学教材", value: "1"},
                    {displayName: "计算机科学", value: "2"}],
                rdoCheck: "1",
                // 动态处理radio
                radioLists: [{name: "Gender", value: "1", displayName: "男"},
                    {name: "Gender", value: "2", displayName: "女"}],
                sectionValue: "香蕉", // 没有value值，默认值就是name的值
                sectionValue1: "0",
                optionLists: [{value: "0", displayName: "苹果"},
                    {value: "1", displayName: "香蕉"},
                    {value: "2", displayName: "葡萄"}]
            }
        },
        // 方法
        methods:{

        },
        filters:{
            toShowCheckBoxState:function(value){
                return value==true?"选中":"未选中"
            }
        }

     }

</script>

<style scoped>


</style>
