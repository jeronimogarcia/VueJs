<template>
  <div class="formContainer">
    <form @submit.prevent="login">
      <p>Login de Usuario</p>
      <input type="text" minlength="5" placeholder="Ingrese Usuario" v-model="usuario.nombre">
      <input type="text" minlength="5" placeholder="Ingrese Password" v-model="usuario.password">
      <button type="submit">Login</button>
    </form>
    <p>{{ usuario }}</p>
    <p>{{ listaUsuarios }}</p>
  </div>
</template>

<script>

export default {
  props: {
    listaUsuarios: Array,
  },
  data() {
    return {
      usuario: {
        nombre: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      if (this.usuario.nombre != "" && this.usuario.password != "") {
        const checkUsuario = this.listaUsuarios.find(usuario => usuario.nombre === this.usuario.nombre)
        if (checkUsuario) {
          checkUsuario.password === this.usuario.password ?
            this.$emit("changeBoolean")
            : alert('password erronea')
        }else{
          alert("No hay usuarios con ese nombre")
        }
      }
    }
  }
}
</script>

<style scoped>
.formContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  width: 300px;
}

form input {
  margin-bottom: 10px;
}

form p {
  font-weight: bold;
}
</style>