const app = Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },
  watch: {
    result(val) {
      setTimeout(() => (this.value = 0), 5000);
    },
  },
  computed: {
    result() {
      if (this.value < 37) {
        return "Not there yet";
      } else if (this.value > 37) {
        return "Too much";
      } else {
        return this.value;
      }
    },
  },
  methods: {
    onAddFive() {
      this.value = this.value + 5;
    },
    onAddOne() {
      this.value = this.value + 1;
    },
  },
});

app.mount("#assignment");
