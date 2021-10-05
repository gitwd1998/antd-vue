<template>
  <ant-layout>
    <ant-layout-sider collapsible width="300px" breakpoint="lg">
      <div class="logo"></div>
      <Aside />
    </ant-layout-sider>
    <ant-layout>
      <ant-layout-header><Header /></ant-layout-header>
      <ant-layout-content><router-view /></ant-layout-content>
      <ant-layout-footer>--- 冬哥出品 ---</ant-layout-footer>
    </ant-layout>
  </ant-layout>
</template>

<script>
import Aside from "@/layout/Aside.js";
import Header from "@/layout/Header.js";
import { Layout } from "ant-design-vue";
export default {
  components: {
    antLayout: Layout,
    antLayoutSider: Layout.Sider,
    antLayoutHeader: Layout.Header,
    antLayoutContent: Layout.Content,
    antLayoutFooter: Layout.Footer,
    Aside,
    Header,
  },
};
</script>

<style lang="less" scoped>
.ant-layout.ant-layout-has-sider {
  .ant-layout-sider {
    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    }
    .ant-menu {
      padding-bottom: 100px;
    }
  }
  .ant-layout {
    .ant-layout-header {
      .ant-menu {
        line-height: 64px;
      }
    }
    .ant-layout-content {
      padding: 10px;
    }
    .ant-layout-footer {
      border-top: 1px solid #ccc;
      text-align: center;
    }
  }
}
</style>