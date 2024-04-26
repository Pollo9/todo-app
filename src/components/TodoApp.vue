<template>

    <SidePanel/>

    <div class="container">
        <h1>TODO LIST</h1>
        
        <form @submit.prevent="addTodo()" class="todo-form">
            <div style="display: flex; flex-direction: column; width: 100%;">
                <input type="text" v-model="newTodo.title" placeholder="Add a new task" style="margin-bottom: 10px;">
                <textarea placeholder="Add a description" v-model="newTodo.description"></textarea>
            </div>
            <button type="submit" class="add-btn">Add</button>
        </form>
        
        <TodoList :todos="visibleTodos" @remove-todo="(id) => store.removeTodoById(id)" />
        
        <div class="todo-filters">
            <span>{{ remaining }} task(s) remaining</span>
            <button @click="toggleShowCompleted()" class="filter-btn">{{ showCompleted ? 'Hide Completed Tasks' : 'Show Completed Tasks' }}</button>
            <button @click="clearCompleted()" class="remove-btn">Remove Completed Tasks</button>
        </div>
    </div>
</template>


<script>
import {useTodoStore} from '@/stores/todos';

import SidePanel from '@/components/SidePanel.vue'
import TodoList from '@/components/TodoList.vue'

export default {
    components: {
        SidePanel,
        TodoList,
    },
    data() {
        return {
            store: null,
            sidePanelStore: null,
            newTodo: {
                title: '',
                description: '',
            },
            showCompleted: true
        };
    },
    computed: {
        todos() {
            return this.store.todos;
        },
        remaining() {
            return this.todos.filter(todo => !todo.done).length;
        },
        visibleTodos() {
            return this.showCompleted ? this.todos : this.todos.filter(todo => !todo.done);
        }
    },
    methods: {
        addTodo() {
            this.store.addTodo(this.newTodo);
            this.newTodo.title = '';
            this.newTodo.description = '';
        },
        toggleShowCompleted() {
            this.showCompleted = !this.showCompleted;
            this.$router.push({ query: { showCompleted: this.showCompleted } });
        },
        clearCompleted() {
            this.store.todos = this.todos.filter(todo => !todo.done);
        }
    },
    created() {
        this.store = useTodoStore();
        this.showCompleted = this.$route.query.showCompleted === 'true';
    },
    watch: {
        '$route.query.showCompleted': function(newVal) {
            this.showCompleted = newVal === 'true';
        }
    }
};
</script>

<style>
.container {
    width: 80%;
    max-width: 1000px;
    margin: 40px auto;
    background: white;
    padding: 20px;
    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
    border-radius: 8px;
    font-family: 'Arial', sans-serif;
}

h1 {
    color: #333;
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
}

.todo-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

input[type="text"], textarea {
    flex-grow: 1;
    padding: 10px;
    border: 2px solid #eee;
    border-radius: 8px;
    font-size: 16px;
    background-color: #f8f8f8;
}

.add-btn {
    padding: 10px 15px;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s;
    font-size: 16px;
    font-weight: bold;
    background-color: #5cb85c;
    margin-right: 0;
}

.add-btn:hover {
    background-color: #4cae4c;
}

.filter-btn, .remove-btn {
    padding: 12px 20px;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.filter-btn {
    background-color: #4CAF50;
}

.filter-btn:hover {
    background-color: #45a049;
}

.remove-btn {
    background-color: #f44336;
}

.remove-btn:hover {
    background-color: #d32f2f;
}

.todo-items {
    margin-top: 20px;
}

.todo-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
}

.title {
    flex-grow: 1;
    font-size: 16px;
    margin: 0 10px;
}

.done {
    text-decoration: line-through;
    color: #bbb;
}

.done-checkbox {
    margin-right: 10px;
    accent-color: #5cb85c;
}

.todo-filters {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

</style>
