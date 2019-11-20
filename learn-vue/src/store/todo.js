// 在index.js引入下面内容：
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
  list: [] // 渲染的数据，返回给View层的东西
}

//创建mutations，目的是能最终改变仓库中的数据，这里是同步操作
const mutations={
  /* 第一个参数是state,第二个参数state[属性]的值等于什么 */
  saveState(state,data){
    /* 函数体 执行赋值操作 */
    state.list=data
  }
}

const getters={

  getState(){

    return state.list
  }

}

//暴露出去
export default new Vuex.Store({
  state,
  mutations,
  getters
})


