var todoList = [
  { message: "Aprender o básico de Vue JS", 
  done: true },
  { message: "Aprender o básico de React", done: false },
];
const App = {
  data() {
    return {
      todoList: window.todoList,
      newTask: {},
    };
  },
  methods: {
    clearAll: function(){
      this.todoList = [];
    }
  },
};

Vue.createApp(App).mount("#app");
