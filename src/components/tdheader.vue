<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="What needs to be done?"
      @keyup.enter="add"
    />
  </div>
</template>
<script>
import { nanoid } from "nanoid";
export default {
  name: "tdheader",
  props: ["addtodo"], //vc
  methods: {
    add(event) {
      const todoobj = { id: nanoid(), item: event.target.value, done: false }; //将输入内容包装成todo对象。
      //console.log(todoobj)
      this.addtodo(todoobj);
    },
  },
};
</script>

<style>
</style>