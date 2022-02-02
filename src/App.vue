<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <tdheader :addtodo="addtodo" />
        <!-- 提前准备个函数，传给 -->
        <tdbody :todos="todos" />
        <!-- 父组件传子组件，把数据传去tdbody -->
        <tdfoot />
      </div>
    </div>
  </div>
</template>
<script>
import tdbody from "./components/tdbody.vue";
import tdfoot from "./components/tdfoot.vue";
import tdheader from "./components/tdheader.vue";

export default {
  name: "App",
  components: {
    //todos是tdheader和tdfoot都在用,放在App中都可以用.
    tdheader,
    tdbody,
    tdfoot,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")), //输入内容作为数组，数组3个属性，id，title内容，done标记是否完成布尔值
      //  {id:'001',item:'eat',done:true},
    };
  },
  methods: {
    addtodo(todoobj) {
      this.todos.unshift(todoobj); //框中添加数据
    },
  },
  watch: {
    //用watch监视数据的变化,如果变化存一份最新的到本地.
    todos: {
      //深度监视为了监视用户是否删除数据.todo.done的值
      deep: true,
      handler(value) {
        //本地存储解决了输入内容后,刷新一下就没有了的问题.
        localStorage.setItem("todos", JSON.stringify(value)); // 存的是个对象,看不出来,得变成json数据
      },
    },
  },
};
</script>
<style>
</style> 