const app = Vue.createApp({
  data() {
    return {
      goalA: "Finish the course and learn Vue ",
      vueLink: "https://vuejs.org/",
      goalB: "Master Vue ",
    };
  },
  methods: {
    outputGoals() {
      const rand = Math.random();
      if (rand > 0.5) {
        return this.goalA;
      } else {
        return this.goalB;
      }
    },
  },
});
app.mount("#user-goal");
