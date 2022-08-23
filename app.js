var app = new Vue({
  el: "#app",
  data: {
    welcomeMessage: "Vue JS - Trabajo Práctico Uno",
    counter: 0,
  },
  methods: {
    incrementar() {
      this.counter++;
    },
    decrementar() {
      if (this.counter > 0) {
        this.counter--;
      }
    },
  },
  computed: {},
});
