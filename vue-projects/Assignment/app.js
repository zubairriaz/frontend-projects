const app = Vue.createApp({
  data() {
    return {
     counter:0,
     name:'',
     confirmName : ''
    };
  },
  methods:{
      increaseCounter(num){
          this.counter = this.counter +  num;
      },
      decreaseCounter(){
        this.counter--
    },
    setName(event){
        this.name= event.target.value;
    },
    confirmInput(){
        this.confirmName = this.name
    }

  }
});
app.mount("#events");
