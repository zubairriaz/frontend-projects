const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      task:'',
      showList:true
    };
  },
  methods: {
    onClick(){
      this.tasks.push(this.task);
    },
    toggleList(){
        this.showList = !this.showList;
    }
  },
});

app.mount("#assignment");
