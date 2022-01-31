<template>
    <div class="todo-header">
        <input type="text" placeholder="What needs to be done?" @keyup.enter="add" />
    </div>
</template>
<script>
import {nanoid} from 'nanoid'
export default {
    name: 'tdheader',
    methods: {
        add(event) {
          const todoitem = {id:nanoid(),item:event.target.value ,done:false}  //将输入内容包装成todo对象。
        }
    },
}
</script>

<style>
</style>