var todos = [];
const App = {
  data() {
    return {
      todos: window.todos,
      newTodo: {done: false},
    };
  },
  created() {
    this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos;
  },
  updated(){
    localStorage.setItem("todos", JSON.stringify(this.todos));
  },
  methods: {
    addNewTodo: function(){
      if(this.newTodo.text){
        this.todos.push(this.newTodo);
        this.newTodo = {done: false};

        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    }
  },
};

Vue.createApp(App).mount("#app");
