const app = Vue.createApp({
  data() {
    return {
      inputA: "",
      inputB: "",
    };
  },
  methods:{
    buttonClick(){
        alert('showing alert');
    },
    onKeydown(event){
        this.inputA = event.target.value;
    },
    onKeydownWithEnter(event){
        this.inputB = event.target.value;
    }
  }
});
app.mount("#assignment");
