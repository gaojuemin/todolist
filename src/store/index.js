import {createFunctionExpression} from '@vue/compiler-core';
import {createStore} from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';


const store = createStore({
  state: {
    todo: {}, // 单件事
    todos: [], // 事件列表
    netlist: [], // 网络存储的数据
  },

  actions: {
    addtodo(context, inputValue) {
      context.commit('addtodo', inputValue);
      // console.log('actions')
    },
    checktodo(context, inputValue) {
      context.commit('checktodo', inputValue);
    },
    deltodo(context, inputValue) {
      context.commit('deltodo', inputValue);
    },
    checkall(context, done) {
      context.commit('checkall', done);
    },
    delall(context) {
      context.commit('delall');
    },
    async readlist(store) {
      try {
        store.state.netlist = await axios.get('/api/todos');
      } catch (error) {
        console.error(error);
      }
      store.commit('delall')
    },
    async delTableTodo(store,todoID){
     await axios.delete('/api/todos/'+todoID,{
       headers:{'Csrf-Token': 'nocheck'},
      })
    },
    async addlist(store,inputValue) {
     await axios.post('/api/todos', {
        title: inputValue.id,
        description: inputValue.description,
      },
      {
        headers: {'Csrf-Token': 'nocheck'},
      })
    },
  },

  mutations: {
    addtodo(state, inputValue) {
      state.todo = inputValue;
      state.todos.unshift(state.todo);
    },
    checktodo(state, inputValue) {
      state.todos[inputValue].done = !state.todos[inputValue].done;
    },
    deltodo: function(state, inputValue) {
      state.todos.splice(inputValue, 1);// 可用
      state.netlist.data.forEach(function (item) {
        if (item.title === state.todos[inputValue].id) {
          console.log(item.id)
          axios.put('/api/todos/'+ item.id,{title:"123"},
            {headers:{'Csrf-Token': 'nocheck'}})
        }
      });
    },
    checkall(state, done) {
      state.todos.forEach((todos) => {
        todos.done = done;
      });
    },
    delall(state) {
      state.todos = state.todos.filter((todos) => {
        return !todos.done;
      });
    },
  },
  plugins: [createPersistedState()], // vuex数据持久化，本地存储
});

export default store;

// PUT https://hxx-todo-server.herokuapp.com/api/todos/${id} 是修改
//GET https://hxx-todo-server.herokuapp.com/api/todos
//POST add new
//DELETE  https://hxx-todo-server.herokuapp.com/api/todos/${id} 是删除
