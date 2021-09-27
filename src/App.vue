<template>
  <h1>{{ $store.state.title }}</h1>
  <Task @showAddTask="showAddTask" @showEditForm="showEditForm"  @editTask="editTask"/>
  <NewTask v-if="showAddTaskForm" @closeAddTaskForm="closeAddTaskForm"/>
  <EditTask  v-if="showEditTaskForm" v-bind:id="id" @closeEditForm="closeEditForm"/>

</template>

<script>
import Task from './components/Task.vue';
import NewTask from './components/NewTask.vue';
import EditTask from './components/EditTask.vue';

export default {
  name: 'App',
  components: {
    Task,
    NewTask,
    EditTask,
  },
  methods: {
    showAddTask(data) {
      this.showAddTaskForm = data;
    },
    closeAddTaskForm(value) {
      this.showAddTaskForm = value;
    },
    showEditForm(value) {
      this.showEditTaskForm = value;
    },
    editTask(id) {
      this.id = id;
    },
    closeEditForm(value) {
      this.showEditTaskForm = value;
    },
  },
  data() {
    return {
      showAddTaskForm: false,
      showEditTaskForm: false,
      id: null,
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
