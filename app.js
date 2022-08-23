var app = new Vue ({
    el: "#app",
    data:{
        message: 'Hello World',
        num1: 5,
        num2: 6
    },
    methods:{
        imprimir(){
            console.log('Hello Coder')
        },
        calculo(){
            let a = 3;
            let b = 5;
            console.log(a*b)
        }
    },
    computed:{
        calculoMatematico(){
            return (this.num1*this.num2)
        }
    }

})

