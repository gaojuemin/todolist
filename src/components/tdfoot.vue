<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="alldone" @change = "changeall" /> -->
      <!-- 可以用v-model简写 -->
      <input type="checkbox" @click="alldone" />
    </label>
    <span>
      <span>completed {{ donetotal }}</span>
      / All {{ total }}
    </span>
    <button class="btn btn-danger" @click="clearall">clean done list</button>
  </div>
</template>
<script>

export default {
  // name: "tdfoot",
  // props: ["todos", "checkall", "delall"],
  computed: {
    total() {
      return this.$store.state.todos.length;
    },
    donetotal() {

      return this.$store.state.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
    },


  },
  methods: {
    // changeall(e){
    //   this.checkall(e.target.checked)   //获取元素的是否被选择。配合非v-model
    // }
    // clearAll() {
    //   if (confirm("Are you sure you want to delete")) {
    //     // this.delall() //del all done
    //   }

    // },
    alldone(done) {
      this.$store.dispatch('checkall', done)//虽然功能实现，但是还得想更清楚。
    },
    clearall(done) {
      this.$store.dispatch('delall', done)

    }

  },
  //   mounted(){
  //   console.log("app1",this.index)
  //  },
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
