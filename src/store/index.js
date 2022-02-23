import { createFunctionExpression } from '@vue/compiler-core';
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    state: {
        todo: {},  //单件事 
        todos: [],//事件列表
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
            context.commit('delall')
        }
    },

    mutations: {
        addtodo(state, inputValue) {
            state.todo = inputValue;
            state.todos.unshift(state.todo);
        },
        checktodo(state, inputValue) {
            state.todos[inputValue].done = !state.todos[inputValue].done;

        },
        deltodo(state,inputValue) {
            state.todos.splice(inputValue, 1)
        },
        checkall(state, done) {
            state.todos.forEach((todos) => {
                todos.done = done
            })
        },
        delall(state) {
            state.todos = state.todos.filter((todos) => {
                return !todos.done
            })
        },
    },

    plugins: [createPersistedState()] //vuex数据持久化，本地存储
})

export default store