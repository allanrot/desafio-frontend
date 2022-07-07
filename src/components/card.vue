<template>
  <div class="card-content d-flex align-items-center">
    <div class="card-retangle"></div>
    <div class="user-avatar">
      <img :src="user.avatar" alt="" class="user-img" />
    </div>
    <div class="user-desc text-start">
      <p class="user-id">#{{ user.id }}</p>
      <p class="user-name">
        {{ user.first_name + " " + user.last_name }}
      </p>
      <p class="user-email">
        {{ user.email }}
      </p>
    </div>
    <div class="user-actions ms-auto my-auto">
      <span @click="openUpdateUser()" class="user-btn"
        ><i class="fa-solid fa-pen-to-square"></i
      ></span>
      <span @click="deleteUser()" class="user-btn"
        ><i class="fa-solid fa-trash"></i
      ></span>
      <span @click="openDetailUser()" class="user-btn"
        ><i class="fa-solid fa-eye"></i
      ></span>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      toast: Swal.mixin({
        toast: true,
        position: "top",
        iconColor: "white",
        customClass: {
          popup: "colored-toast",
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      }),
    };
  },
  methods: {
    openUpdateUser() {
      this.$emit("openUpdateUser", this.user);
    },
    async deleteUser() {
      await this.$store.dispatch("deleteUser", this.user);
      this.toast.fire({
        title: "Usuário deletado com sucesso!",
        icon: "success",
      });
    },
    openDetailUser() {
      this.$router.push({
        name: "showUser",
        params: { id: this.user.id },
      });
    },
  },
};
</script>

<style>
</style>