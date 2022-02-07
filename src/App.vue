<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <tdheader :addtodo="addtodo" />
        <!-- 提前准备个函数，传给son-->
        <tdbody :todos="todos" :checktodo="checktodo" :deltodo="deltodo" />
        <!-- 父组件传子组件，把数据传去tdbody -->
        <tdfoot :todos="todos" :checkall="checkall" :delall="delall" />
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
      todos: JSON.parse(localStorage.getItem("todos")) || [], //输入内容作为数组，数组3个属性，id，title内容，done标记是否完成布尔值
      //  {id:'001',item:'eat',done:true},如果不加[]，第一次输入时候会报错（Cannot read properties of null ）
    };
  },
  methods: {
    //添加todo事项
    addtodo(todoobj) {
      this.todos.unshift(todoobj); //框中添加数据unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
    },
    //勾选或者取消勾选
    checktodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
        //勾选后搜索条目中相同id的，把勾选状态取反，得把这结果送到tditem中。
      });
    },
    deltodo(id) {
      //删除todo
      // todo.id = ''
      this.todos = this.todos.filter((todo) => { // 返回id不等于删除的item，变成个新数组，赋值给todos，如果不赋值给todos 网页没有变化
        return todo.id !== id
      })
    },
    //全选和全不选
    checkall(done) {
      this.todos.forEach((todo) => {
        todo.done = done    //done传来参数，是否被勾选，勾选了就是真。
      })
    },
    //删除所有已经完成的todo
    delall() {
      this.todos = this.todos.filter(todo => {
        return !todo.done     //更新列表把已经做完的都删除 
      })
    }
  },
  watch: {
    //用watch监视数据的变化,如果变化存一份最新的到本地.unshift 方法vue可监控到。
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
<style></style>
<!--子传父数据，父提前建一个函数，子组件中调用函数并带参，父就可以收到这个参数数据了。-->
<!--数据在哪里操作数据的方法就在哪里 ,子组件传值给爷爷组件，得通过父组件中转-->