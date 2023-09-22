var todos = [];
const App = {
  data() {
    return {
      todos: window.todos,
      newTask: {done: false},
    };
  },
  created() {
    this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos;
  },
  methods: {
    addNewTask: function(){
      if(this.newTask.text){
        this.todos.push(this.newTask);
        this.newTask = {done: false};

        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    }
  },
};

Vue.createApp(App).mount("#app");
