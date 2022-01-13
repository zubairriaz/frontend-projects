const app = Vue.createApp({
    data(){
        return {
            value:'',
            backgroundColor:'',
            isVisible : true,
        }
    },
    methods:{
        toggleVisbility(){
            this.isVisible = !this.isVisible;
        }
    }
})

app.mount('#assignment');