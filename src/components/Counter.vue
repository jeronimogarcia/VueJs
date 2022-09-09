<template>
    <div>
        <button @click="decrementar()">-</button>
        <button @click="incrementar()">+</button>
        <p> {{ meal.counter }} </p>
        <button class="btn btn-success" @click="add(meal, listaCarrito, meal.counter)">AGREGAR</button>
    </div>
</template>

<script>
export default {
    props: {
        listaCarrito: Array,
        meal: Object,
    },
    methods: {
        decrementar() {
            if (this.meal.counter > 1) {
                this.meal.counter--;
            }
        },

        incrementar() {
            if (this.meal.counter < this.meal.quantity) {
                this.meal.counter++;
            }
        },

        add(meal, listaCarrito, counter) {
            const findProductIndex = listaCarrito.findIndex(
                (productFind) => meal.id === productFind.id
            );
            if (findProductIndex !== -1) {
                if (listaCarrito[findProductIndex].bougth + counter <= meal.quantity) {
                    listaCarrito[findProductIndex].bougth =
                        listaCarrito[findProductIndex].bougth + counter;
                } else {
                    alert(
                        `La cantidad que quiere sumar supera a la del stock. Disponemos de ${meal.quantity
                        } unidades. Puede agregar ${meal.quantity - listaCarrito[findProductIndex].bougth
                        } unidades mas como maximo`
                    );
                }
            } else {
                listaCarrito.push({
                    id: meal.id,
                    titulo: meal.titulo,
                    costo: meal.costo,
                    portada: meal.portada,
                    bougth: meal.counter,
                });
            }
        }
    }
}
</script>

<style scoped>

</style>