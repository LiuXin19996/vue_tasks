<template>
    <div class="todo-list">
        <TodoLists :data-source="list"></TodoLists>
    </div>
</template>

<script>

    import TodoLists from './../components/Todo-list'

    export default {
        name: "Todo",
        components: {
            TodoLists
        },
        data() {
            return {
                url: 'https://api.myjson.com/bins/vbvni',
                list: []
            };
        },
        created() {
            this.$emit('header',true)
            this.fetch();
        },
        methods: {
            async fetch() {
                console.log("开始抓取数据.......")
                const { data } = await this.$http.get(this.url);

                // console.log(data);

                // this.list = data;
                this.$store.commit("saveState",data)

            }
        }

    }
</script>

<style scoped>

</style>
