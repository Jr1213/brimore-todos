import {
  createStore,
} from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    title: 'TO DO',
    data: [],
  },
  mutations: {
    addData(state, data) {
      state.data = data;
      console.log(state.data);
    },
  },
  actions: {
    getiingData({
      commit,
    }) {
      axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
        commit('addData', res.data);
        console.log(res.data);
      });
    },
  },
  modules: {

  },
});
