<template>
    <div class="todo-items">
        <div v-for="todo in todos" :key="todo.id" class="todo-item">
            <input class="done-checkbox" type="checkbox" v-model="todo.done" @click="store.changeState(todo.id)">
            <span class="title" :class="{done: todo.done}">{{ todo.title }}</span>

            <PanelRightOpen style="margin-right: 10px;cursor: pointer;" size="20" @click="this.sidePanelStore.openSidePanel(todo)"/>
            <Trash2 style="cursor: pointer;" size="20"  @click="$emit('remove-todo', todo.id)"/>
        </div>
    </div>
</template>

<script>
import { PanelRightOpen, Trash2 } from 'lucide-vue-next';
import {useSidePanelStore} from '@/stores/sidepanel';

export default {
    components: {
        PanelRightOpen,
        Trash2,
    },
    props: {
        todos: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            sidePanelStore: null,
        };
    },
    created() {
        this.sidePanelStore = useSidePanelStore();
    },
};
</script>
