<template>
  <div>
    
    <h1 @click="getUsers()">getUsers</h1>
    <h1 @click="createUser()">createUser</h1>
    <h1 @click="updateUser()">updateUser</h1>
    <h1 @click="deleteUser()">deleteUser</h1>
    <h1 @click="openUserDetails()">openUserDetails</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getUsers");
  },
  methods: {
    getUsers() {
      this.$store.dispatch("getUsers");
    },
    createUser() {
      this.$store.dispatch("createUser", this.$store.getters['users'][0]);
    },
    updateUser() {
      this.$store.dispatch("updateUser", this.$store.getters['users'][0]);
    },
    deleteUser() {
      this.$store.dispatch("deleteUser", this.$store.getters['users'][0]);
    },
    openUserDetails(user) {
      user = this.$store.getters['users'][0];
      this.$router.push({
        name: "showUser",
        params: { id: user.id },
      });
    }
  },
};
</script>

<style>
</style>