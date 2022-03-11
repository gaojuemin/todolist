<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <tdheader />
        <tdbody />
        <tdfoot />
      </div>
    </div>
    <tdtable />
  </div>
</template>
<script>

import tdbody from "./components/tdbody.vue";
import tdfoot from "./components/tdfoot.vue";
import tdheader from "./components/tdheader.vue";
import tditem from "./components/tditem.vue";
import tdtable from "./components/tdtable.vue";

export default {
  name: "App",
  components: {
    tdheader,
    tdbody,
    tdfoot,
    tditem,
    tdtable,
  },
};
</script>
<style></style>
<!--子传父数据，父提前建一个函数，子组件中调用函数并带参，父就可以收到这个参数数据了。-->
<!--数据在哪里操作数据的方法就在哪里 ,子组件传值给爷爷组件，得通过父组件中转-->
