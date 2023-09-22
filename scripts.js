var todos = [];
const App = {
  data() {
    return {
      todos: window.todos,
      newTask: {done: false},
    };
  },
  methods: {
    addNewTask: function(){
      if(this.newTask.text){
        this.todos.push(this.newTask);
        this.newTask = {done: false};
      }
    }
  },
};

Vue.createApp(App).mount("#app");
