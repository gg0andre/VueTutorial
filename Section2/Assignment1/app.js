const app = Vue.createApp({
  data() {
    return {
      name: "Andre",
      age: 27,
      imageUrl:'https://en.wikipedia.org/static/images/icons/wikipedia.png'
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateNumber() {
        return Math.random();
    }
  },
});

app.mount("#assignment");
