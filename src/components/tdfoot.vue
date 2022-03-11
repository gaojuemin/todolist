<template>
  <div class="todo-footer" v-show="total">
    <label>
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
  computed: {
    total() {
      return this.$store.state.todos.length;
    },
    donetotal() {
      return this.$store.state.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0);
    },
  },
  methods: {
    alldone(done) {
      this.$store.dispatch('checkall', done);
    },
    clearall(done) {
      this.$store.dispatch('delall', done);
    },
  },
};
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
