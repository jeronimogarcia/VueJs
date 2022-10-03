<template>
  <div>
    <h3>Registrar Producto</h3>
    <div class="formContainer mt-2">
      <form class="formulario" @submit.prevent="submit">
        <span>Producto</span>
        <input
          type="name"
          placeholder="Ingrese nombre del producto"
          class="form-control my-3"
          v-model.trim="$v.product.$model"
          :class="{
            'is-invalid': $v.product.$error,
            'is-valid': !$v.product.$error & $v.product.required,
          }"
        />
        <p class="text-danger" v-if="!$v.product.minLength">
          Minimo 6 caracteres
        </p>
        <p class="text-danger" v-if="!$v.product.maxLength">
          Maximo 20 caracteres
        </p>

        <span>Precio</span>
        <input
          type="numeric"
          placeholder="Ingrese un precio. Rango 400-5000"
          class="form-control my-3"
          v-model.trim="$v.price.$model"
          :class="{
            'is-invalid': $v.price.$error,
            'is-valid': !$v.price.$error & $v.price.required,
          }"
        />
        <p class="text-danger" v-if="!$v.price.between">
          Minimo 400. Maximo 5000
        </p>

        <span>Quantity</span>
        <input
          type="numeric"
          placeholder="Ingrese stock. Rango 1-15"
          class="form-control my-3"
          v-model.trim="$v.quantity.$model"
          :class="{
            'is-invalid': $v.quantity.$error,
            'is-valid': !$v.quantity.$error & $v.quantity.required,
          }"
        />
        <p class="text-danger" v-if="!$v.quantity.between">
          Entre 1-15 unidades
        </p>

        <span>Quality</span>
        <input
          type="numer"
          placeholder="Ingrese puntaje calidad. Rango 1-10"
          class="form-control my-3"
          v-model.trim="$v.quality.$model"
          :class="{
            'is-invalid': $v.quality.$error,
            'is-valid': !$v.quality.$error & $v.quality.required,
          }"
        />
        <p class="text-danger" v-if="!$v.quality.between">Entre 1 y 10</p>

        <span>Taste</span>
        <input
          type="numeric"
          placeholder="Ingrese puntaje sabor. Rango 1-10"
          class="form-control my-3"
          v-model.trim="$v.taste.$model"
          :class="{
            'is-invalid': $v.taste.$error,
            'is-valid': !$v.taste.$error & $v.taste.required,
          }"
        />
        <p class="text-danger" v-if="!$v.taste.between">Entre 1 y 10</p>

        <span>Healthy</span>
        <input
          type="numeric"
          placeholder="Ingrese puntaje saludable. Rango 1-10"
          class="form-control my-3"
          v-model.trim="$v.healthy.$model"
          :class="{
            'is-invalid': $v.healthy.$error,
            'is-valid': !$v.healthy.$error & $v.healthy.required,
          }"
        />
        <p class="text-danger" v-if="!$v.healthy.between">Entre 1 y 10</p>

        <span>Fragrance</span>
        <input
          type="numeric"
          placeholder="Ingrese puntaje fragancia. Rango 1-10"
          class="form-control my-3"
          v-model.trim="$v.fragrance.$model"
          :class="{
            'is-invalid': $v.fragrance.$error,
            'is-valid': !$v.fragrance.$error & $v.fragrance.required,
          }"
        />
        <p class="text-danger" v-if="!$v.fragrance.between">Entre 1 y 10</p>

        <b-button variant="primary" type="submit" :disabled="$v.$invalid"
          >Registrar Producto</b-button
        >
      </form>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  between,
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      product: "",
      quantity: "",
      quality: "",
      taste: "",
      healthy: "",
      fragrance: "",
      price: "",
      urlUsers: "https://633435bf90a73d0fede99930.mockapi.io/meals",

      postProduct: async () => {
        const productData = {
          title: this.$v.product.$model,
          price: this.$v.price.$model,
          quantity: this.$v.quantity.$model,
          taste: this.$v.taste.$model,
          quality: this.$v.quality.$model,
          fragrance: this.$v.fragrance.$model,
          healthy: this.$v.healthy.$model,
          portrait: "https://iili.io/L8anYG.jpg",
          counter: 1,
        }; 
        await this.axios.post(this.urlUsers, productData)
          .then((response) => response.data)
          .catch((err) => console.error(err));
      },
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
      } else {
        this.postProduct(),
          ([
            this.$v.product.$model,
            this.$v.price.$model,
            this.$v.quantity.$model,
          ] = "");
        this.$v.$reset();
      }
    },
  },
  validations: {
    product: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20),
    },
    price: {
      required,
      between: between(400, 5000),
    },
    quantity: {
      required,
      between: between(1, 15),
    },
    taste: {
      required,
      between: between(1, 10),
    },
    healthy: {
      required,
      between: between(1, 10),
    },
    fragrance: {
      required,
      between: between(1, 10),
    },
    quality: {
      required,
      between: between(1, 10),
    },
  },
};
</script>

<style scoped>
h3 {
  margin-top: 50px;
}
.formContainer {
  display: flex;
  justify-content: center;
}
.formulario {
  width: 600px;
}
.formContainer span {
  display: flex;
  font-size: 18px;
  font-weight: bold;
}

.formContainer input {
  margin-top: 10px !important;
}
</style>
