<template functional>
  <ant-sub-menu :key="props.menuinfo.to" :disabled="props.menuinfo.disabled">
    <template slot="title">
      <ant-icon :type="props.menuinfo.icon" />
      <span>{{ props.menuinfo.title }} {{ props.menuinfo.name }}</span>
    </template>
    <template v-for="item in props.menuinfo.item">
      <fun-test v-if="item.item.length" :key="item.to" :menuinfo="item.item" />
      <ant-menu-item v-else :key="item.to">
        <router-link :to="item.to">
          <ant-icon :type="item.icon" />
          <span>{{ item.title }} {{ item.name }}</span>
        </router-link>
      </ant-menu-item>
    </template>
  </ant-sub-menu>
</template>
<script>
import funTest from "@/components/funTest.vue";
import { Icon, Menu } from "ant-design-vue";
export default {
  components: {
    antSubMenu: Menu.SubMenu,
    antMenuItem: Menu.Item,
    antIcon: Icon,
    funTest,
  },
  props: {
    menuinfo: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>