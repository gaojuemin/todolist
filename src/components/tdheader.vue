<template>
  <h1 class="title">TODOS</h1>
  <div class="todo-header">
    <input type="text" placeholder="What needs to be done?" @keyup.enter="add" />
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
      this.addtodo(todoobj); //这里的this指的是
      event.target.value = ""; //输入后输入框变空。
    },
  },
};
</script>

<style>
.title {
  text-align: center;
  font: 40px "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.todo-header {
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
