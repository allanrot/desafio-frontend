<template>
  <div v-if="open">
    <div class="form">
      <div class="form-group my-2 text-start fw-bolder">
        <label for="user-fullname" class="my-1">Nome do usuário</label>
        <input
          v-model="user.name"
          type="text"
          id="user-fullname"
          class="form-control"
        />
      </div>
      <div class="form-group my-2 text-start fw-bolder">
        <label for="user-role" class="my-1">Função do usuário</label>
        <select v-model="user.role" name="user-role" id="user-role" class="form-control">
          <option :value="0">Selecione a função</option>
          <option v-for="role in roles" :key="role.id" :value="role.id">
            {{ role.name }}
          </option>
        </select>
      </div>
      <div>
        <button @click="saveUser()" class="my-btn-primary w-100 mt-3">
          Salvar dados do usuário
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  data() {
    return {
      user: {
        name: null,
        role: 0,
      },
      roles: [
        {
          id: 1,
          name: "Desenvolvedor",
        },
        {
          id: 2,
          name: "Gerente de Projetos",
        },
        {
          id: 3,
          name: "Tech Lead",
        },
        {
          id: 4,
          name: "UI/UX Designer",
        },
      ],
    };
  },
  props: {
    open: {
      type: Boolean,
      default: false,
      required: false,
    },
    updating: {
      type: Boolean,
      required: true,
    },
    userToUpdate: {
      type: Object,
      required: false,
    },
  },
  computed: {
    userFullName() {
      if (this.updating) {
        this.user.name = this.userToUpdate.first_name + " " + this.userToUpdate.last_name;
      } else {
        this.user.name = null;
      }
    },
  },
  methods: {
    async saveUser() {
      if (this.updating) {
        await this.$store.dispatch("updateUser", this.user);
        this.$emit('close');
      } else {
        await this.$store.dispatch("createUser", this.user);
        this.$emit('close');
      }
    },
  },
};
</script>

<style>
</style>