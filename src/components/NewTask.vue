<template>
  <form @submit.prevent="handdleData">
        <label for="username">Todo Title</label>
  <input type="text" name="username" placeholder="Type in your todo title.."
      autocomplete="off" required v-model="title"/>
      <div class="check">
        <input type="checkbox" v-model="complete" class="check">
        <label class="check">completed?</label>
      </div>
      <button type="submit">add task</button>
      <button class="close" @click="closeAddTaskForm">close</button>
  </form>
  <div class="alert" v-if="done" @click.self="closeAlert">
      <p>this task has been added</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      complete: false,
      title: null,
      done: false,
    };
  },
  methods: {
    handdleData() {
      const task = { title: this.title, completed: this.complete };
      const headers = { 'Content-type': 'application/json; charset=UTF-8' };
      axios.post('https://jsonplaceholder.typicode.com/todos', task, { headers })
        .then((res) => {
          console.log(res);
          this.done = !this.done;
        }).catch((err) => {
          console.log(err);
        });
    },
    closeAlert() {
      this.done = !this.done;
    },
    closeAddTaskForm() {
      this.$emit('closeAddTaskForm', false);
    },
  },
};

</script>

<style lang="scss" scoped>
    form {
        margin:5% auto 0 auto;
        padding:30px;
        width:400px;
        height:auto;
        overflow:hidden;
        background:white;
        border-radius:10px;
        label {
            font-size:14px;
            color:darkgray;
            cursor:pointer;
        }
        input {
            margin:15px 0;
            padding:15px 10px;
            width:100%;
            outline:none;
            border:1px solid #bbb;
            border-radius:20px;
            display:inline-block;
        }
        .check{
            display: flex;
            align-items: center ;
            justify-content: start;
            width: 100%;
            input{
                width: 10%;
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
    .close{
        background-color: salmon;
        margin-left: 1rem;
    }
}
.alert{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .9);
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        padding: 1rem 2rem;
        color: #000;
        font-size: 1.5rem;
        text-transform: uppercase;
        background-color: #ddd;
        border: 4px solid rgb(23, 207, 23);
        border-radius: 5rem;
    }
}
</style>
