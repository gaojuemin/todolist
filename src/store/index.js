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
        // console.log('app1',response);
        // store.commit('updatenetlist',response.data) //更新本地列表
      } catch (error) {
        console.error(error);
      }
    },
    async addlist(store) {
      axios.post('/api/todos', {
        title: 'hi',
        description: 'test',
      })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      //   store.dispatch("readlist")
    },
  },

  mutations: {
    // updatenetlist(state, ls) {
    //     state.netlist = [...ls];
    //     console.log('app2',state.netlist);
    //   }
    // ,
    addtodo(state, inputValue) {
      state.todo = inputValue;
      state.todos.unshift(state.todo);
    },
    checktodo(state, inputValue) {
      state.todos[inputValue].done = !state.todos[inputValue].done;
    },
    deltodo(state, inputValue) {
      // state.todos = state.todos.filter((todos) => {
      //     return !todos[inputValue];
      // })   //not work
      // console.log(state.todos.filter((todos) => {
      //   return  todos != todos[inputValue]}))
      //       const a = state.todos[inputValue];
      //    state.todos = state.todos.filter(todo=>todo != a)  //ok
      state.todos.splice(inputValue, 1); // 可用
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
    // getnetlist(context) {
    //     state.netlist = axios.get('/api/todos')
    //         .then(function (response) {
    //             // 处理成功情况
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             // 处理错误情况
    //             console.log(error);
    //         })
    //         .then(function () {
    //             // 总是会执行
    //         });
    // }
  },

  plugins: [createPersistedState()], // vuex数据持久化，本地存储
});

export default store;
