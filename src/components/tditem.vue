<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @click="handlecheck(todo.id)" />
      <!--  :checked="todo.done"动态标签属性,为了初始化显示 @click 事件传参
      v-model="todo.done"利用v-model的双向数据绑定功能，监控是否用户勾选-->
      <span>{{ todo.item }}</span>
    </label>
    <button class="btn btn-del" @click="handledelete(todo.id)">delete</button>
    <!-- delete是js关键词，得改名字 -->
  </li>
</template>
<script>
export default {
  name: "tditem",
  props: ["todo", "checktodo", "deltodo"], //接收tdbody中的数据，props数据不能修改，如果是数据是对象，可以修改对象的属性值，vue监控不到
  methods: {

    //勾选已完成
    handlecheck(id) {
      //通知App将对应的todo对象 的done值取反
      this.checktodo(id)
    },
    //删除条目
    handledelete(id) {
      if (confirm("Are you sure you want to delete")) {
        this.deltodo(id)
      }

    },
  },
};
</script>

<style></style>
