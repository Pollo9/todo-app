<template>
    <VueSidePanel
      v-model="isOpened"
      lock-scroll
      hide-close-btn
      width="600px"
    >
      <template #header>
        <div class="header">
          <h2>{{ todo?.title }}</h2>
          <span @click="store.closeSidePanel()">X</span>
        </div>
      </template>
  
      <template #default v-if="todo">
        <div class="content">
            <p>{{ todo?.description }}</p>
        </div>
      </template>
    </VueSidePanel>
</template>
  
<script>
import { useSidePanelStore } from "@/stores/sidepanel";
  
export default {
  data() {
    return {
      store: null,
    };
  },
  computed: {
    isOpened() {
      return this.store.isOpen;
    },
    todo() {
      return this.store.todo;
    },
  },
  created() {
    this.store = useSidePanelStore();
  },
};
</script>
  
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
  
.header h2 {
  margin: 0;
  font-size: 24px;
}
  
.header span {
  cursor: pointer;
  font-size: 24px;
  color: #fff;
}
  
.content {
  height: 100%;
  padding: 20px;
  color: #333;
}
  
.content p {
  margin: 0;
  font-size: 16px;
}
  
.content .done {
  color: #4caf50;
}
  
.content .undone {
  color: #f44336;
}

.footer {
  padding: 20px;
}

.validate-btn {
  width: 100%;
  height: 50px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
</style>