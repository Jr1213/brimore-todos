<template>
  <NewTask />
</template>

<script>
import NewTask from './NewTask.vue';

export default {
  name: 'EditTask',
  props: ['title', 'complete'],
  components: {
    NewTask,
  },
  data() {
    return {
      one: this.title,
      two: this.complete,
    };
  },
  mounted() {
    console.log(this.complete, '|', this.title);
  },
};
</script>

<style lang="scss" scoped>

</style>
