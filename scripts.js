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
  methods: {},
};

Vue.createApp(App).mount("#app");
