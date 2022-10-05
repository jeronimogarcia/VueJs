<template>
  <div>
    <LoginForm :usersList="usersList"/>
    <RegisterForm :usersList="usersList" @actualizarLista="actualizarLista"/>
  </div>
</template>

<script>
import LoginForm from "@/components/Login/LoginForm.vue";
import RegisterForm from "@/components/Login/RegisterForm.vue";

export default {
  data() {
    return {
      usersList: [],
    };
  },
  methods:{
    actualizarLista(info){
       this.usersList = info
    }
  },
  components: { LoginForm, RegisterForm },
};
</script>

<style scoped></style>
