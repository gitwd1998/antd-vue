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
  async created() {
    if (!window.navigator.onLine) Message.error("网络链接失败, 请检查网络连接");
    let token = this.$store.getters.getToken || "";
    if (token) {
      let data = await getUserInfo({ token });
      if (data.code === "0") {
        this.$store.commit("setUser", data.data.user);
        this.$store.commit("setPhone", data.data.phone);
        this.$store.commit("setHead", data.data.head);
      } else {
        Message.error(data.msg || `${data.name}: ${data.message}`);
        localStorage.removeItem("token");
        this.$router.replace({ path: "/login" });
      }
    } else {
      Message.error("获取token失败");
      this.$router.replace({ path: "/login" });
    }
  },
};
</script>