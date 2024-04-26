import { defineStore } from 'pinia';

export const useSidePanelStore = defineStore('sidePanel', {
    state: () => ({
        isOpen: false,
        todo: null,
    }),
    actions: {
        openSidePanel(todo) {
            this.isOpen = true;
            this.setTodo(todo);
        },
        closeSidePanel() {
            this.isOpen = false;
            this.clearTodo();
        },
        setTodo(todo) {
            this.todo = todo;
        },
        clearTodo() {
            this.todo = null;
        },
    },
    persist: {
        enabled: true,
    },
});