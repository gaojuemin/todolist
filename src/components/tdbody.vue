<template>
  <ul class="todo-main">
    <tditem/>
  </ul>
</template>
<script>
import tditem from './tditem.vue';
export default {
  components: {tditem},
};
</script>
<style>
.todo-main {
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
