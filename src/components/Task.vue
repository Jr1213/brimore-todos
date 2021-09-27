<template>
  <div class="tasks">
      <div  v-for="task in data" v-bind:key="task.id" class="data">
        <p class="task">{{task.title}}</p>
        <div>
            <button @click="deletTask(task.id)"> delete </button>
            <button @click="editTask(task.id)" class="edit"> edit </button>
        </div>
      </div>
  </div>
  <button @click="showAddTask" class="newTask"> + add new task</button>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Task',
  data() {
    return {
      data: [],
      editForm: false,
    };
  },
  components: {
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
    deletTask(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
        console.log(res);
      });
    },
    editTask(id) {
      this.$emit('editTask', id);
      this.$emit('showEditForm', true);
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
    height: 50vh;
    overflow-y: scroll;
    .data{
        transition: all 250ms ease-in-out;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;
        .task{
            font-size: 1.5rem;
        }
        &:hover{
            background-color: #ccc;
        }
        button{
             padding: 1rem 2rem;
            font-weight: 600;
            font-size: 1rem;
            border: none;
            outline: none;
            color: #fff;
            background-color: rgb(235, 17, 17);
            border-radius: 50px;
            text-transform: uppercase;
            cursor: pointer;
        }
        .edit{
            margin-left: 1rem;
            background-color: rgb(29, 29, 221);
        }
    }
}
        .newTask{
            padding: 1rem 2rem;
            font-weight: 600;
            font-size: 1rem;
            margin: 0 auto;
            border: none;
            outline: none;
            color: #fff;
            background-color: #af7eeb;
            border-radius: 50px;
            transform: translateY(50%);
            text-transform: uppercase;
            cursor: pointer;
        }
</style>
