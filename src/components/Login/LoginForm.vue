<template>
  <div>
    <h3>Logear Usuario</h3>
    <div class="formContainer mt-2">
      <form class="formulario" @submit.prevent="submit">
        <span>Usuario</span>
        <input
          type="name"
          placeholder="Ingrese un usuario"
          class="form-control my-3"
          v-model.trim="$v.user.$model"
          :class="{
            'is-invalid': $v.user.$error,
            'is-valid': !$v.user.$error & $v.user.required,
          }"
        />
        <p class="text-danger" v-if="!$v.user.minLength">Minimo 6 caracteres</p>

        <span>Password</span>
        <input
          type="password"
          placeholder="Ingrese password"
          class="form-control my-3"
          v-model.trim="$v.password.$model"
          :class="{
            'is-invalid': $v.password.$error,
            'is-valid': !$v.user.$error & $v.password.required,
          }"
        />
        <p class="text-danger" v-if="!$v.password.minLength">
          Minimo 8 caracteres
        </p>
        <p class="text-danger" v-if="!$v.password.maxLength">
          Maximo 20 caracteres
        </p>

        <b-button variant="primary" type="submit" :disabled="$v.$invalid"
          >Logear Usuario</b-button
        >
      </form>
    </div>
  </div>
</template>
<script>
import {
  required,
  minLength,
  alphaNum,
  maxLength,
} from "vuelidate/lib/validators";

export default {
  props: {
    usersList: Array,
  },
  data() {
    return {
      user: "",
      password: "",
    };
  },
  validations: {
    user: {
      required,
      alphaNum,
      minLength: minLength(6),
      maxLength: maxLength(20),
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(20),
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
      } else {
        const found = this.usersList.find(
          (user) =>
            user.user.toLowerCase() == this.$v.user.$model.toLowerCase() &&
            user.password.toLowerCase() == this.$v.password.$model.toLowerCase()
        );
        if (found) {
          alert("Login satisfactorio");
          [this.$v.user.$model, this.$v.password.$model] = "";
          this.$v.$reset();
        } else {
          alert("Usuario o password incorrecto");
        }
      }
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
  margin-bottom: 50px;
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
