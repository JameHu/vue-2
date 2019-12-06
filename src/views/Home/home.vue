<template>
  <div>
    home页面

    {{ daas }}
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    daas() {
      // return this.$store;
      console.log(this.$store.state);
      return this.$store.state.data;
    }
  }
};
</script>
<style lang="scss">
</style>