<template>
<div>
  <transition name="fade">
    <div v-if="loaded" class="row w-100 d-flex justify-content-center">
      <div
        class="
          col-12 col-md-8
          d-flex
          justify-content-between
          align-items-center
          mb-4
        "
      >
        <h1 class="fw-bolder">#{{ user.id }}</h1>
        <button @click="goBack()" class="my-btn-secondary">Voltar</button>
      </div>
      <div
        class="
          col-12 col-md-8
          d-flex
          justify-content-start
          align-items-center
          mb-4
          text-start
        "
      >
        <div class="mr-3">
          <img :src="user.avatar" alt="" />
        </div>
        <div class="mx-3">
          <p class="user-label">Primeiro nome</p>
          <p class="user-info">
            {{ user.first_name }}
          </p>
        </div>
        <div class="mx-3">
          <p class="user-label">Último nome</p>
          <p class="user-info">
            {{ user.last_name }}
          </p>
        </div>
      </div>
      <div
        class="
          col-12 col-md-8
          d-flex
          flex-column
          justify-content-start
          align-items-start
          mb-4
          text-start
        "
      >
        <p class="user-label">Endereço de e-mail</p>
        <p class="user-info">
          {{ user.email }}
        </p>
        <p class="user-label">Link do avatar</p>
        <p class="user-info">
          {{ user.avatar }}
        </p>
        <p class="user-label">Link de suporte</p>
        <p class="user-info">https://regres.in/#suport-heading</p>
        <p class="user-label">Descrição do usuário</p>
        <p class="user-info">
          To keep ReqRes free, contributions towards server costs are
          appreciated!
        </p>
      </div>
    </div>
  </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      loaded: false,
    };
  },
  async mounted() {
    await this.getUser();
  },
  methods: {
    async getUser() {
      const { id } = this.$route.params;
      await this.$store.dispatch("getUser", id);
      this.user = this.$store.getters["userDetails"];
      this.loaded = true;
    },
    goBack() {
      this.loaded = false;
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>