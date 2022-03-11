<template>
  <h1 class="title">DOS</h1>
  <div class="todo-header">
    <input type="text" placeholder="What needs to be done?" v-model="item" @keyup.enter="add" />
  </div>
</template>
<script>
import {nanoid} from 'nanoid';
// import {ref} from 'vue'
// import {useStore} from "vuex"
// const store = useStore()
// const item = ref()
// const inputvalue = ref()
// const add = () =>{ inputvalue.value = {id: nanoid(), title: '', description: item.value, done: false, createTime: '', finishTime: ''}; // 将输入内容包装成todo对象。, endtime: event.endtime ,starttime:gettime()
// store.dispatch('addtodo', inputvalue.value);
// console.log('app33', this.item);
// store.dispatch('addlist', item.value);
// item.value='';
// }
export default {
  name: 'tdheader',
  // props: ["addtodo"], //vc

  data() {
    return {
      item: '',

    };
  },
  methods: {

    async add(event) {
      const inputvalue = {id: nanoid(), title: '', description: this.item, done: false, createTime: '', finishTime: ''}; // 将输入内容包装成todo对象。, endtime: event.endtime ,starttime:gettime()
      this.$store.dispatch('addtodo', inputvalue);
      // console.log('app33', this.item);
      this.$store.dispatch('addlist',{id:inputvalue.id,description:this.item});
      this.item = '';
      this.$store.dispatch('readlist');
      // location.reload();
      // this.$store.dispatch('readlist');

      // console.log(todoobj)
      // this.addtodo(todoobj); //这里的this指的是
      // event.target.value = ""; //输入后输入框变空。
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
