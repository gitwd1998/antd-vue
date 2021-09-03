<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { getUserInfo } from "@/api";
export default {
  data() {
    return {};
  },
  async created() {
    let token = this.$store.getters.getToken || "";
    if (token) {
      let { data } = await getUserInfo({ token });
      if (data.code === "0") {
        this.$store.commit("setUser", data.data.user);
        this.$store.commit("setPhone", data.data.phone);
        this.$store.commit("setHead", data.data.head);
      } else {
        this.$router.replace({ path: "/login" });
      }
    } else {
      this.$router.replace({ path: "/login" });
    }
  },
};
</script>