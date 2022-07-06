<template>
  <div>
    {{user}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    }
  },
  async created() {
    await this.getUser();
  },
  methods: {
    async getUser() {
      const { id } = this.$route.params;
      // await this.$store.dispatch("getUser", id);
      this.user = this.$store.getters['userDetails'];
    }
  }
}
</script>

<style>

</style>