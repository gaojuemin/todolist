<template>
 <n-space vertical :size="12">
    <n-data-table
      :bordered="false"
      :columns="columns"
      :data="data"
      :pagination="pagination"
    />
  </n-space>
</template>
<script>
// import {ref, computed, onMounted} from "vue"
// import {NDataTable, NButton, NTooltip} from "naive-ui"
// import {useStore} from 'vuex'
import axios from 'axios'
import { h, defineComponent } from 'vue'
import { NTag, NButton, useMessage } from 'naive-ui'
import {useStore} from 'vuex'  //vue3使用store

const createColumns = ({ delTodo }) => {
  return [
    {
      title: 'ID',
      key: 'id'
    },
    {
      title: 'Title',
      key: 'title'
    },
    {
      title: 'Description',
      key: 'description'
    },
    {
      title:'CreateTime',
      key: 'createTime'
    },
    {
      title:'FinishTime',
      key: 'finishTime'
    },
    {
      title: 'Action',
      key: 'actions',
      render (row) {
        return h(
          NButton,
          {
            size: 'small',
            onClick: () => delTodo(row)
          },
          { default: () => 'DelTodo' }
        )
      }
    }
  ]
}

export default defineComponent({
  setup () {
    const store = useStore()
    // console.log(store.state.netlist,"app3")
    store.dispatch('readlist') 
    return {
      data:store.state.netlist.data,
      columns: createColumns({
        delTodo (rowData) {
        //??????
        }
      }),
      pagination: {
        pageSize: 10
      }
    }
  }
})


</script>