<template>
         <li>
            <label>
                <input type="checkbox" :checked="todo.done"/>
                <span>{{todo.item}}</span>
            </label>
            <button class="btn btn-danger" style="display:none">删除</button>
        </li>
</template>
<script>
export default {
    name:'tditem',
    props:['todo'], //接收tdbody中的数据
}
</script>

<style>

</style>