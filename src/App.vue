<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <tdheader />
                <tdbody />
                <tdfoot />
            </div>
        </div>
    </div>
</template>
<script>
import tdbody from './components/tdbody.vue'
import tdfoot from './components/tdfoot.vue'
import tdheader from './components/tdheader.vue'

export default {
    name: 'App',
    components: {
        tdheader, tdbody, tdfoot
    }
}


</script>
<style>
</style> 