<template>
  <div>
    <Header :title='title' />
    <Formulario :usersList='usersList'/>
    <Table :usersList="usersList" :listaTitle="listaTitle"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Formulario from "./components/Formulario.vue";
import Table from "./components/Table.vue";

export default {
  components: {
    Header,
    Formulario,
    Table
},

  data() {
    return {
      title: 'Formularios',
      listaTitle: 'Lista de Usuarios',
      usersList: [],
    }
  }
}

</script>

<style scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 91.5vh;
  padding-bottom: 80px;
}
</style>
