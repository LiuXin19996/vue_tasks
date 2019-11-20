<template>

  <div id="app">

    <ul>
      <li v-for="(item, index) in users" :key="index">
        {{index}}.
        用户名：{{item.name}}
        密码：{{item.password}}
      </li>
    </ul>

    <ol  >
      <li v-for="(value, key) in usersObj" :key="index">
        用户名：{{key}}
        密码：{{value}}
      </li>

    </ol>

  </div>

</template>

<script>
    export default {
        name: 'exam7',

        data() {
            return {
                users: [
                    {name: 'lee', password: '123456'},
                    {name: 'zhaSan', password: '654321'},
                    {name: 'lisi', password: '111111'},
                ],
                usersObj: {
                    lee: '123456',
                    zhangsan: '654321',
                    lisi: '111111'
                }
            }
        }


     }


</script>

<style scoped>


</style>
