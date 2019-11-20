<template>

  <div id='my'>
    <input type="checkbox" v-model="checkAll.check" @change="checkAllChange()">

    <label>{{checkAll.name}} {{checkAll.check}}</label>

    <ul>

      <li v-for="list in lists">
        <input type="checkbox" v-model="list.check"  @change="curChange()">
        <label>{{list.name}} {{list.check}}</label>
      </li>

    </ul>
  </div>


</template>

<script>
    export default {
        name: 'exam9',
        el: '#my',
        data() {
            return {
                checkAll: {name: '全选', check: false},
                lists: [{name: '小米', check: true},
                    {name: '华为', check: false},
                    {name: '苹果', check: false},
                    {name: '中兴', check: false},
                    {name: 'OPPO', check: false}]
            }
        },
        methods: {
            checkAllChange() {
                this.lists.forEach(function (item) {
                    item.check = this.checkAll.check;
                });
            },
            curChange: function () {
                //true的状态
                const curTrue = this.lists.filter(function (item) {
                    return item.check == true;

                });

                curTrue.length == this.lists.length ? this.checkAll.check = true : this.checkAll.check = false;
            }
        }
    }

</script>

<style scoped>

</style>
