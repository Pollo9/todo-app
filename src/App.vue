<template>
  <div class="div-main">
    <TodoApp />
  </div>
</template>

<script>
import TodoApp from '@/components/TodoApp.vue';

export default {
    data() {
        return {
            store: null,
            sidePanelStore: null,
            todos: [],
            newTodo: {
                title: '',
                description: '',
            },
        };
    },
    components: {
      TodoApp,
    },
  };
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  .div-main{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
</style>
