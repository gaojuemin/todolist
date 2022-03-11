<template>
  <li>
    <label>
      <div v-for="(todos, index) of $store.state.todos">
        <span>{{ $store.state.todos[index].description }}</span>
        <input
          type="checkbox"
          :checked="$store.state.todos[index].done"
          @click="handlecheck(index)"
        />
        <button class="btn btn-del" @click="handledelete(index)">
          job_delete</button>
      </div>
    </label>
  </li>
</template>
<script>
export default {
  methods: {
    handlecheck(inputValue) {
      this.$store.dispatch('checktodo', inputValue);
    },
    handledelete(inputValue) {
      if (confirm('Are you sure you want to delete')) {
        this.$store.dispatch('deltodo', inputValue);
      }
    },
  },
};
</script>
<style></style>
