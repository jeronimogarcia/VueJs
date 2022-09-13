<template>
  <div class="formContainer">
    <form @submit.prevent="registro">
      <p>Registro de Usuario</p>
      <input type="text" minlength="5" placeholder="Ingrese Usuario" v-model="usuario.nombre">
      <input type="text" minlength="5" placeholder="Ingrese Password" v-model="usuario.password">
      <button type="submit">Registro</button>
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
    registro() {
      console.log(this.usuario)
      if (this.usuario.nombre != "" && this.usuario.password != "") {
        const found = this.listaUsuarios.find(nombreUsuario => nombreUsuario.nombre == this.usuario.nombre)
        if (found) {
          alert('El nombre de usuario ya esta usado')
        } else (
          this.listaUsuarios.push(
            {
              nombre: this.usuario.nombre,
              password: this.usuario.password
            }
          )
        )
        this.usuario.nombre = ""
        this.usuario.password = ""
      } else (
        alert('Por favor ingrese un Usuario y Password')
      )
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