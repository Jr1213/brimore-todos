<template>
  <div class="tasks">
      <div @click="edit(task.id)" v-for="task in data.slice(0,5)" v-bind:key="task.id" class="data">
        <p class="task">{{task.title}}</p>
        <EditTask title="task.title" complete="task.completed" v-show="editForm"/>
      </div>
      <button @click="showAddTask"> + add new task</button>
  </div>
</template>

<script>
import axios from 'axios';
import EditTask from './EditTask.vue';

export default {
  name: 'Task',
  data() {
    return {
      data: [],
      editForm: false,
    };
  },
  components: {
    EditTask,
  },
  mounted() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/10/todos')
      .then((res) => {
        this.data = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    showAddTask() {
      this.showAddTasks = true;
      this.$emit('showAddTask', this.showAddTasks);
    },
    edit() {
      this.editForm = !this.editForm;
    },
  },
};
</script>

<style lang="scss" scoped>
.tasks{
    background-color: #fff;
    width: fit-content;
    margin: 0 auto;
    box-shadow: #ccc 0px 0px 16px 1px;
    .data{
        cursor: pointer;
        transition: all 250ms ease-in-out;
        .task{
            font-size: 1.5rem;
            padding: 1rem 2rem;
        }
        &:hover{
            background-color: #ccc;
        }
    }
        button{
            padding: 1rem 2rem;
            font-weight: 600;
            font-size: 1rem;
            border: none;
            outline: none;
            color: #fff;
            background-color: #af7eeb;
            border-radius: 50px;
            transform: translateY(50%);
            text-transform: uppercase;
            cursor: pointer;
        }
}
</style>
