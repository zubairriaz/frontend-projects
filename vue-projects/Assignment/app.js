const app = Vue.createApp({
  data() {
    return {
      name: "Zubair",
      age: "31",
      random: Math.random(),
      value: "test",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=768:*",
    };
  },
});
app.mount("#assignment");
