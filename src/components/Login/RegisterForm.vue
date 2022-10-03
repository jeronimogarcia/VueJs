<template>
  <div>
    <h3>Registrar Usuario</h3>
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
        <p class="text-danger" v-if="!$v.user.maxLength">
          Maximo 20 caracteres
        </p>
        <p class="text-danger" v-if="!$v.user.alphaNum">
          Solo caracteres alfanumericos
        </p>

        <span>Email</span>
        <input
          type="email"
          placeholder="Ingrese un email"
          class="form-control my-3"
          v-model.trim="$v.email.$model"
          :class="{
            'is-invalid': $v.email.$error,
            'is-valid': !$v.user.$error & $v.email.required,
          }"
        />
        <p class="text-danger" v-if="!$v.email.email">
          Email incorrecto. Debe contener arroba y dominio. Ejemplo@hotmail.com
        </p>
        <p class="text-danger" v-if="!$v.email.maxLength">
          Maximo 30 caracteres
        </p>

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

        <span>Repetir Password</span>
        <input
          type="password"
          placeholder="Repita password"
          class="form-control my-3"
          v-model.trim="$v.samePassword.$model"
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
  </div>
</template>

<script>
import {
  required,
  minLength,
  email,
  sameAs,
  maxLength,
  alphaNum,
} from "vuelidate/lib/validators";

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
      urlUsers: "https://633435bf90a73d0fede99930.mockapi.io/users",
      postUsers: async () => {
        const cursoData = {
          user: this.$v.user.$model,
          email: this.$v.email.$model,
          password: this.$v.password.$model,
          isAdmin: false,
        };
        await this.axios
          .post(this.urlUsers, cursoData)
          .then((response) => response.data)
          .then(() => this.getUsers())
          .catch((err) => console.error(err));
      },
      getUsers: async () => {
        await this.axios
          .get(this.urlUsers)
          .then((response) => response.data)
          .then((data) => {
            this.$emit("actualizarLista", data);
          })
          .catch((err) => console.error(err));
      },
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
      } else {
        const found = this.usersList.find(
          (user) =>
            user.user.toLowerCase() == this.$v.user.$model.toLowerCase() ||
            user.email.toLowerCase() == this.$v.email.$model.toLowerCase()
        );
        if (found) {
          alert("Usuario o email ya usados");
        } else {
          this.postUsers(),
            ([
              this.$v.user.$model,
              this.$v.email.$model,
              this.$v.password.$model,
              this.$v.samePassword.$model,
            ] = "");
          this.$v.$reset();
        }
      }
    },
  },
  validations: {
    user: {
      required,
      alphaNum,
      minLength: minLength(6),
      maxLength: maxLength(20),
    },
    email: {
      required,
      email,
      maxLength: maxLength(30),
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(20),
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
  display: flex;
  font-size: 18px;
  font-weight: bold;
}

.formContainer input {
  margin-top: 10px !important;
}
</style>
