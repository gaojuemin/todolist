<template>
  <li>
    <label>
      <div v-for="(todos, index) of $store.state.todos">
        <span>{{ $store.state.todos[index].description }}</span>
        <input
          type="checkbox"
          :checked="$store.state.todos[index].done"
          @click="handlecheck(index)"
        />
        <!--  :checked="todo.done"动态标签属性,为了初始化显示 @click 事件传参
        v-model="todo.done"利用v-model的双向数据绑定功能，监控是否用户勾选-->
        <!-- <span>{{$store.state.todo.item}}</span> -->
        <button class="btn btn-del" @click="handledelete(index)">job_delete</button>
      </div>
    </label>

    <!-- delete是js关键词，得改名字 -->
  </li>
</template>
<script>
export default {
  // name: "tditem",
  // props: ["todo", "checktodo", "deltodo"], //接收tdbody中的数据，props数据不能修改，如果是数据是对象，可以修改对象的属性值，vue监控不到
  methods: {

    //勾选已完成
    handlecheck(inputValue) {
      console.log("app2", inputValue)
      //通知App将对应的todo对象 的done值取反
      this.$store.dispatch('checktodo', inputValue)
    },
    //删除条目
    handledelete(inputValue) {
      if (confirm("Are you sure you want to delete")) {
        // console.log("app3",inputValue)
        this.$store.dispatch('deltodo', inputValue)

      }

    },
  },
  mounted() {
    // console.log("app1")
        // this.$store.dispatch('realist')
  },
};
</script>

<style></style>
