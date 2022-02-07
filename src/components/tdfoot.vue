<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="alldone" @change = "changeall" /> -->
      <!-- 可以用v-model简写 -->
      <input type="checkbox" v-model="alldone" />
    </label>
    <span>
      <span>completed {{ donetotal }}</span>
      / All {{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">clean done list</button>
  </div>
</template>
<script>

export default {
  name: "tdfoot",
  props: ["todos", "checkall", "delall"],
  computed: {
    total() {
      return this.todos.length;
    },
    donetotal() {
      //第一种写法
      //   let i=0
      //   this.todos.forEach((todo)=>{
      //   if(todo.done) i++
      // })
      // return i
      // }
      //用reduce统计函数改进后
      // const x = this.todos.reduce((pre, current) => {           //pre是函数上次返回的值，下面不写pre会变undefined,
      //   return pre + (current.done ? 1 : 0)   //如果done为真，那pre加1，如果为不加，最后是所有已完成的事项数。
      // }, 0)
      // return x
      //reduce函数简写
      return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
    },
    alldone: {
      // return this.donetotal == this.total && this.total > 0  配和非v-model
      get() {
        return this.donetotal == this.total && this.total > 0
      },
      set(value) {
        this.checkall(value)
      }

    }

  },
  methods: {
    // changeall(e){
    //   this.checkall(e.target.checked)   //获取元素的是否被选择。配合非v-model
    // }
    clearAll() {
      if (confirm("Are you sure you want to delete")) {
        this.delall() //del all done
      }

    }
  }
}

//数组的方法，得多熟悉。
</script>

<style>
.todo-footer {
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
