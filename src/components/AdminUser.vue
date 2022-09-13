<template>
  <div class="container">
    <p>Modo: {{ isLoged ? 'Admin' : 'Cliente' }}</p>
    <button 
    class="btnClose" 
    v-bind:class="{ btnLoged : isLoged, btnClosed: !isLoged }" 
    @click="$emit('changeBoolean')">
    Cerrar Modo Admin
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isLoged: Boolean,
  }
}
</script>

<style scoped>
.container {
  background-color: rgb(182, 201, 159);
  padding-top: 90px;
  border-bottom: 1px solid black;
  font-size: 24px;
  margin-bottom: 15px;
}

.container p {
  margin: 0;
  padding-bottom: 5px;
}

.btnClose {
  margin-bottom: 10px;
  display: none;
}

.btnLoged {
  display: inline;

}
</style>