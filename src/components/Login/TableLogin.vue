<template>
    <div v-if=" usersList.length!=0">
      <h2>Lista de Usuarios</h2>
      <div class="tableContainer">
        <table>
          <thead>
            <th>Index/ID</th>
            <th>User</th>
            <th>Email</th>
          </thead>
          <tbody>
            <tr v-for="(user, index) in usersList" :key="user.id" :user="user">
              <td>{{ index }}</td>
              <td>{{ user.user }}</td>
              <td>{{ user.email }}</td>
              <td>
                <b-button variant="danger" @click="eliminar(index)">Eliminar</b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      usersList: Array,
    },
    methods:{
      eliminar(index){
        this.usersList.splice(index,1)
      }
    }
  };
  </script>
  
  <style scoped>
    h2{
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
    .tableContainer {
      display: flex;
      justify-content: center;
    }
    .tableContainer table {
      width: 50%;
    }
    .tableContainer thead {
      font-size: 24px;
    }
    .tableContainer tbody tr {
      border-top: 1px solid black;
      padding-top: 5px;
    }
    .tableContainer tbody td {
      font-size: 22px;
      background-color: white;
    }
    .cartImage img {
      width: 70px;
    }
    .crossSize {
      font-size: 45px;
      margin: 5px;
    }
  </style>