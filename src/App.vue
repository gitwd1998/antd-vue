<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { getUserInfo } from "@/api";
import { Message } from "ant-design-vue";
export default {
  data() {
    return {};
  },
  computed: {},
  async created() {
    if (!window.navigator.onLine) Message.error("网络链接失败, 请检查网络连接");
    let token = this.$store.getters.getToken || "";
    console.log(token);
    if (token) {
      let res = await getUserInfo({ token });
      if (res.code === "0") {
        this.$store.commit("setUserName", res.data.user);
        this.$store.commit("setPhoneNumber", res.data.phone);
        this.$store.commit("setAvatar", res.data.head);
      } else {
        Message.error(res.msg || `${res.name}: ${res.message}`);
        localStorage.removeItem("token");
        this.$store.commit("setToken", "");
        this.$router.replace({ path: "/login" });
      }
    } else {
      Message.error("获取token失败");
      this.$router.replace({ path: "/login" });
    }
  },
};
</script>