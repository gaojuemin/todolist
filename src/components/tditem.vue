<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" />
      <!--  :checked="todo.done"动态标签属性-->
      <span>{{ todo.item }}</span>
    </label>
  </li>
</template>
<script>
export default {
  name: "tditem",
  props: ["todo"], //接收tdbody中的数据
};
</script>

<style>
</style>