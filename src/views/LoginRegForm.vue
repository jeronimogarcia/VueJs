<template>
  <div>
    <LoginForm :usersList="usersList"/>
    <RegisterForm :usersList="usersList" />
    <TableLogin :usersList="usersList" />
  </div>
</template>

<script>
import LoginForm from "@/components/Login/LoginForm.vue";
import RegisterForm from "@/components/Login/RegisterForm.vue";
import TableLogin from "@/components/Login/TableLogin.vue";
export default {
  props: {
  },
  data() {
    return {
      usersList: [],
    };
  },
  components: { LoginForm, RegisterForm, TableLogin },
};
</script>

<style scoped></style>
