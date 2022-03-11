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

import {h, defineComponent} from 'vue';
import {NButton} from 'naive-ui';
import {useStore} from 'vuex'; // vue3使用store
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
const store = useStore();

const createColumns = ({delTodo}) => {
  return [
    {
      title: 'ID',
      key: 'id',
    },
    {
      title: 'Title',
      key: 'title',
    },
    {
      title: 'Description',
      key: 'description',
    },
    {
      title: 'CreateTime',
      key: 'createTime',
    },
    {
      title: 'FinishTime',
      key: 'finishTime',
    },
    {
      title: 'DelTodo',
      key: 'actions',
      render(row) {
        return h(
            NButton,{size: 'small',onClick: () => delTodo(row)},{default: () => 'DelTodo'},
        );
      },
    },
  ];
};

export default defineComponent({
  setup() {
    const store = useStore();
    // console.log(store.state.netlist,"app3")
    store.dispatch('readlist');
    return {
      data: store.state.netlist.data,
      columns: createColumns({
        async delTodo(rowData) {
          console.log(rowData.id)
          await store.dispatch('delTableTodo', rowData.id);
          await store.dispatch('readlist')
          await sleep(2000)
          location.reload();
        },
      }),
      pagination: {
        pageSize: 15,
      },
    };
  },
});
</script>
