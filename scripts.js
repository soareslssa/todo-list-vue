var todoList = [
  { text: "Aprender o básico de Vue JS", 
  done: true },
  { text: "Aprender o básico de React", done: false },
];
const App = {
  data() {
    return {
      todoList: window.todoList,
      newTask: {done: false},
    };
  },
  methods: {
    addNewTask: function(){
      if(this.newTask.text){
        this.todoList.push(this.newTask);
        this.newTask = {done: false};
      }
    }
  },
};

Vue.createApp(App).mount("#app");
