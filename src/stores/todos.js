import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todos', {
    state: () => ({
        todos: [],
        id: 0,
    }),
    actions: {
        addTodo(todo) {
            this.todos.push({title: todo.title, description: todo.description, id: this.id++, done: false});
        },
        removeTodoById(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        changeState(id){
            this.todos = this.todos.map(todo => {
                if (todo.id === id) {
                    todo.done = !todo.done;
                }
                return todo;
            });
        }
    },
    persist: {
        enabled: true,
    },
});