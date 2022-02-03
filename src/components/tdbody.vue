<template>
  <ul class="todo-main">
    <tditem v-for="todo in todos" :key="todo.id" :todo="todo" :checktodo="checktodo" :deltodo="deltodo"/>
    <!--定义todo ，遍历数组中每个元素，todo=“todo“传数据 -->
    <!-- 收到checktodo的数据，本组件不用，输入tditem标签传给子组件。 -->
  </ul>
</template>
<script>
import tditem from "./tditem.vue";
export default {
  name: "tdbody",
  components: { tditem },
  props: ["todos", "checktodo","deltodo"], //接收app中传入的todos数据
};
</script>

<style>
.todo-main {
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #4d4d4d;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  font-weight: 300;
  text-align: center;
}
</style>
