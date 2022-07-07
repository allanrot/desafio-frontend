<template>
  <div class="row w-100 d-flex justify-content-center">
    <div class="col-12 col-md-8 col-xl-5 d-flex justify-content-between mb-4">
      <h1 class="fw-bolder">Usuários</h1>
      <button
        v-if="!dropdownOptions.open"
        @click="openCreateUser()"
        class="my-btn-primary"
      >
        Novo usuário
      </button>
      <button v-else @click="closeCreateUser()" class="my-btn-secondary">
        Cancelar
      </button>
    </div>
    <div class="row w-100 d-flex justify-content-center">
      <div class="col-12 col-md-8 col-xl-5 d-flex flex-column">
        <transition name="fade">
          <my-dropdown
            :open="dropdownOptions.open"
            @close="closeCreateUser"
            :updating="dropdownOptions.updating"
            :userToUpdate="dropdownOptions.userToUpdate"
          ></my-dropdown>
        </transition>
      </div>
    </div>
    <div class="row w-100 d-flex justify-content-center">
      <div class="col-12 col-md-8 col-xl-5 my-2">
        <div v-for="user in users" :key="user.id">
          <my-card :user="user" @openUpdateUser="openUpdateUser"></my-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "../components/card.vue";
import dropdown from "../components/dropdown.vue";

export default {
  components: {
    myCard: card,
    myDropdown: dropdown,
  },
  data() {
    return {
      users: null,
      dropdownOptions: {
        open: false,
        updating: false,
        userToUpdate: null,
      },
    };
  },
  async created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      await this.$store.dispatch("getUsers");
      this.users = this.$store.getters["users"];
    },
    openCreateUser() {
      this.dropdownOptions.open = true;
    },
    openUpdateUser(user) {
      this.dropdownOptions.open = true;
      this.dropdownOptions.updating = true;
      this.dropdownOptions.userToUpdate = user;
    },
    closeCreateUser() {
      this.dropdownOptions.open = false;
      this.dropdownOptions.updating = false;
      this.dropdownOptions.userToUpdate = null;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>