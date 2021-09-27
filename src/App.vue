<template>
  <h1>{{ $store.state.title }}</h1>
  <Task @showAddTask="showAddTask"/>
  <NewTask v-if="showAddTaskForm" @closeAddTaskForm="closeAddTaskForm"/>
</template>

<script>
import Task from './components/Task.vue';
import NewTask from './components/NewTask.vue';

export default {
  name: 'App',
  components: {
    Task,
    NewTask,
  },
  methods: {
    showAddTask(data) {
      this.showAddTaskForm = data;
    },
    closeAddTaskForm(value) {
      this.showAddTaskForm = value;
    },
  },
  data() {
    return {
      showAddTaskForm: false,
    };
  },
};
</script>

<style lang="scss">
body{
  background-color: #e3e9ff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  text-transform: uppercase;
}

</style>
