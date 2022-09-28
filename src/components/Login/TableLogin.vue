<template>
  <div v-if="usersList.length != 0">
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
              <b-button variant="danger" @click="deleteUsers(user.id)"
                >Eliminar</b-button
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlUsers: "https://633435bf90a73d0fede99930.mockapi.io/users",
      deleteUsers: async (identificador) => {
        let encabezado = {
          method: "DELETE",
        };
        await fetch(this.urlUsers + "/" + identificador, encabezado)
          .then((response) => response.json())
          .then(()=> this.getUsers())
          .catch((err) => console.error(err));
      },
      getUsers: async () => {
        await fetch(this.urlUsers)
          .then((response) => response.json())
          .then((data) => {
            this.$emit("actualizarLista", data)
          })
          .catch((err) => console.error(err));
      },
    };
  },
  props: {
    usersList: Array,
  },
};
</script>

<style scoped>
h2 {
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
