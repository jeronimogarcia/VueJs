<template>
  <div class="formContainer mt-5">
    <form class="formulario" @submit.prevent="submit">
      <span>Usuario</span>
      <input
        type="name"
        placeholder="Ingrese un usuario"
        class="form-control my-3"
        v-model="$v.user.$model"
        :class="{
          'is-invalid': $v.user.$error,
          'is-valid': !$v.user.$error & $v.user.required,
        }"
      />
      <p class="text-danger" v-if="!$v.user.minLength">Minimo 6 caracteres</p>

      <span>Email</span>
      <input
        type="email"
        placeholder="Ingrese un email"
        class="form-control my-3"
        v-model="$v.email.$model"
        :class="{
          'is-invalid': $v.email.$error,
          'is-valid': !$v.user.$error & $v.email.required,
        }"
      />
      <p class="text-danger" v-if="!$v.email.email">
        Email incorrecto. Debe contener arroba y dominio. Ejemplo@hotmail.com
      </p>

      <span>Password</span>
      <input
        type="password"
        placeholder="Ingrese password"
        class="form-control my-3"
        v-model="$v.password.$model"
        :class="{
          'is-invalid': $v.password.$error,
          'is-valid': !$v.user.$error & $v.password.required,
        }"
      />
      <p class="text-danger" v-if="!$v.password.minLength">
        Minimo 8 caracteres
      </p>

      <span>Repetir Password</span>
      <input
        type="password"
        placeholder="Repita password"
        class="form-control my-3"
        v-model="$v.samePassword.$model"
        :class="{
          'is-invalid': $v.samePassword.$error,
          'is-valid': !$v.user.$error & $v.samePassword.required,
        }"
      />
      <p class="text-danger" v-if="!$v.samePassword.sameAsPassword">
        Password incorrecta
      </p>

      <b-button variant="primary" type="submit" :disabled="$v.$invalid"
        >Registrar Usuario</b-button
      >
    </form>
  </div>
</template>

<script>
import { User } from "@/constructor/user";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  props: {
    usersList: Array,
  },

  data() {
    return {
      user: "",
      email: "",
      password: "",
      samePassword: "",
    };
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
      } else {
        const found = this.usersList.find(
          (user) => user.user == this.$v.user.$model || user.email == this.$v.email.$model
        );
        if (found) {
          alert("Usuario o email ya usados");
        } else {
          this.usersList.push(
            new User(
              this.$v.user.$model,
              this.$v.email.$model,
              this.$v.password.$model
            )
          );
          [
            this.$v.user.$model,
            this.$v.email.$model,
            this.$v.password.$model,
            this.$v.samePassword.$model,
          ] = "";
          this.$v.$reset();
        }
      }
    },
  },

  validations: {
    user: {
      required,
      minLength: minLength(6),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
    },
    samePassword: {
      required,
      sameAsPassword: sameAs("password"),
    },
  },
};
</script>

<style scoped>
.formContainer {
  display: flex;
  justify-content: center;
}

.formulario {
  width: 600px;
}

.formContainer span {
  font-size: 18px;
  font-weight: bold;
}
</style>
