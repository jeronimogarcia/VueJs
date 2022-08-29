var app = new Vue({
  el: "#app",
  data: {
    message: "Hola coder!",
    num: 0,
    sum: 10,
    bool: true,
    style: "green",
  },
  methods: {
    imprimir() {
      console.log("321");
    },
    sumar() {
      this.num = parseInt(this.num) + parseInt(this.sum);
      this.num = +this.num + this.sum;
      //this.num++
    },
    restar() {
      this.num = parseInt(this.num) - parseInt(this.sum);
      //this.num--
    },
  },
  computed: {
    text() {
      return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    },
    text2() {
      return `<span style="color:red;">coder</span>`;
    },
    calculoMatematico() {
      return true ? this.num1 : this.num2;
    },
  },
});
