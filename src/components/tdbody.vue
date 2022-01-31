<template>
    <ul class="todo-main">
     <tditem v-for="todo in todos" :key="todo.id" :todo="todo"/>   
     <!--定义todo ，遍历数组中每个元素，todo=“todo“传数据 -->
    </ul>
</template>
<script>
import tditem from "./tditem.vue"
export default {
    name: 'tdbody',
    components: {tditem},
    data(){
        return{
            todos:[                   //输入内容作为数组，数组3个属性，id，title内容，done标记是否完成布尔值
             {id:'001',item:'eat',done:true},
            ]
        }
    }
} 
</script>

<style>
</style>