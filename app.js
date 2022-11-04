const { createApp } = Vue;

createApp({
  data() {
    return {
      title: 'Hello Vue!',
      todoText: '',
    };
  },
  methods: {
    addTodo() {
      console.log();
    },
  },
}).mount('#app');
