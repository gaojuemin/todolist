<template>
  <ul class="todo-main">
    <tditem v-for="todo in todos" :key="todo.id" :todo="todo" />
    <!--定义todo ，遍历数组中每个元素，todo=“todo“传数据 -->
  </ul>
</template>
<script>
import tditem from "./tditem.vue";
export default {
  name: "tdbody",
  components: { tditem },
  props: ["todos"], //接收app中传入的todos数据
};
</script>

<style>
</style>