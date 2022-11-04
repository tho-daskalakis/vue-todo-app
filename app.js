const { createApp } = Vue;

createApp({
  data() {
    return {
      title: 'Hello Vue!',
      todoText: '',
      todoArr: [],
    };
  },
  methods: {
    addTodo() {
      // Check for empty input
      if (this.todoText === '') {
        alert('Input cannot be empty');
        return;
      }

      this.todoArr.push({
        text: this.todoText,
        done: false,
      });

      // Clear input
      this.todoText = '';
    },

    removeTodo(todo) {
      const todoIndex = this.todoArr.indexOf(todo);
      this.todoArr.splice(todoIndex, 1);
    },

    markAllAsDone() {
      this.todoArr.forEach((todo) => {
        todo.done = true;
      });
    },
  },
}).mount('#app');
