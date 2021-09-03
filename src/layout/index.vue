<template>
  <ant-layout>
    <ant-layout-sider>
      <div class="logo"></div>
      <ant-menu mode="inline" theme="dark" @click="handleSelected">
        <template v-for="menu in nav">
          <ant-sub-menu v-if="menu.item.length" :key="menu.title">
            <template slot="title">
              <ant-icon :type="menu.icon" />
              <span>{{ menu.title }} {{ menu.name }}</span>
            </template>
            <template v-for="item in menu.item">
              <ant-sub-menu v-if="item.item.length" :key="item.title">
                <template slot="title">
                  <ant-icon :type="item.icon" />
                  <span>{{ item.title }} {{ item.name }}</span>
                </template>
                <ant-menu-item
                  v-for="child in item.item"
                  :key="child.title"
                  :title="child.title"
                >
                  <ant-icon :type="child.icon" />
                  <span>{{ child.title }} {{ child.name }}</span>
                </ant-menu-item></ant-sub-menu
              >
              <ant-menu-item v-else :key="item.title" :title="item.title">
                <ant-icon :type="item.icon" />
                <span>{{ item.title }} {{ item.name }}</span>
              </ant-menu-item>
            </template>
          </ant-sub-menu>
          <ant-menu-item v-else :key="menu.title" :title="menu.title">
            <ant-icon :type="menu.icon" />
            <span>{{ menu.title }} {{ menu.name }}</span>
          </ant-menu-item>
        </template>
      </ant-menu>
    </ant-layout-sider>
    <ant-layout>
      <ant-layout-header>
        <ant-menu mode="horizontal" theme="dark" :default-selected-keys="['4']">
          <ant-menu-item key="1">
            <ant-icon type="gold" />
            <span>nav 1</span>
          </ant-menu-item>
          <ant-menu-item key="2">
            <ant-icon type="gold" />
            <span>nav 2</span>
          </ant-menu-item>
          <ant-menu-item key="3">
            <ant-icon type="gold" />
            <span>nav 3</span>
          </ant-menu-item>
          <ant-menu-item key="4">
            <ant-icon type="gold" />
            <span>nav 4</span>
          </ant-menu-item>
        </ant-menu>
      </ant-layout-header>
      <ant-layout-content><router-view /></ant-layout-content>
      <ant-layout-footer>基于vue + antd的后台管理系统</ant-layout-footer>
    </ant-layout>
  </ant-layout>
</template>

<script>
import nav from "@/assets/json/nav.json";
import { Icon, Layout, Menu } from "ant-design-vue";
export default {
  components: {
    antLayout: Layout,
    antLayoutSider: Layout.Sider,
    antLayoutHeader: Layout.Header,
    antLayoutContent: Layout.Content,
    antLayoutFooter: Layout.Footer,
    antMenu: Menu,
    antSubMenu: Menu.SubMenu,
    antMenuItem: Menu.Item,
    antIcon: Icon,
  },
  data() {
    return {
      nav,
    };
  },
  methods: {
    handleSelected(select) {
      console.log(select);
    },
  },
};
</script>

<style lang="less" scoped>
.ant-layout.ant-layout-has-sider {
  height: 100%;
  .ant-layout-sider {
    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
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
      overflow: auto;
    }
    .ant-layout-footer {
      border-top: 1px solid #ccc;
      text-align: center;
    }
  }
}
</style>