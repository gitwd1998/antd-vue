<template>
  <div class="home">
    <a-row>
      <a-space>
        <a-button>默认按钮</a-button>
        <a-button type="primary">primary按钮</a-button>
        <a-button type="dashed">dashed按钮</a-button>
        <a-button type="danger">danger按钮</a-button>
      </a-space>
    </a-row>
    <a-row>
      <a-space>
        <a-button type="link">链接</a-button>
        <a-button disabled>禁用</a-button>
      </a-space>
    </a-row>
    <a-row>
      <a-space>
        <a-button shape="round" icon="search">搜索</a-button>
        <a-button shape="circle" icon="search" />
        <a-button icon="search" />
        <a-button shape="circle" icon="search" />
      </a-space>
    </a-row>
    <a-row>
      <a-space>
        <a-button type="primary" loading> Loading </a-button>
        <a-button type="primary" loading />
      </a-space>
    </a-row>
    <a-row>
      <a-space>
        <a-icon type="smile" theme="twoTone" :spin="true" />
        <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
        <a-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a" />
      </a-space>
    </a-row>
    <a-row>
      <a-space>
        <a-avatar :size="64" icon="user" />
        <a-avatar size="large" icon="user" />
        <a-avatar icon="user" />
        <a-avatar size="small" icon="user" />
      </a-space>
    </a-row>
    <a-row>
      <a-space>
        <a-avatar shape="square" :size="64" icon="user" />
        <a-avatar shape="square" size="large" icon="user" />
        <a-avatar shape="square" icon="user" />
        <a-avatar shape="square" size="small" icon="user" />
      </a-space>
    </a-row>
    <a-row>
      <a-space :size="20">
        <a-badge :count="1"><a-avatar shape="square" icon="user" /></a-badge>
        <a-badge dot><a-avatar shape="square" icon="user" /></a-badge>
      </a-space>
    </a-row>
    <a-row>
      <a-space>
        <a-dropdown>
          <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
            Hover me <a-icon type="down" />
          </a>
          <a-menu slot="overlay" @click="handleChange">
            <a-menu-item key="1">1st menu item</a-menu-item>
            <a-menu-item key="2">2nd menu item</a-menu-item>
            <a-menu-item key="3">3rd menu item</a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-space>
    </a-row>
    <a-row>
      <a-select
        default-value="lucy"
        style="width: 120px"
        @change="handleChange"
      >
        <a-select-option value="jack"> Jack </a-select-option>
        <a-select-option value="lucy"> Lucy </a-select-option>
        <a-select-option value="disabled" disabled> Disabled </a-select-option>
        <a-select-option value="Yiminghe"> yiminghe </a-select-option>
      </a-select>
      <a-select default-value="lucy" style="width: 120px" disabled>
        <a-select-option value="lucy"> Lucy </a-select-option>
      </a-select>
      <a-select default-value="lucy" style="width: 120px" loading>
        <a-select-option value="lucy"> Lucy </a-select-option>
      </a-select>
    </a-row>
  </div>
</template>
<script>
import {
  Row,
  Space,
  Button,
  Icon,
  Avatar,
  Badge,
  Dropdown,
  Menu,
  Select,
} from "ant-design-vue";
export default {
  components: {
    aRow: Row,
    aBadge: Badge,
    aSpace: Space,
    aButton: Button,
    aIcon: Icon,
    aAvatar: Avatar,
    aDropdown: Dropdown,
    aMenu: Menu,
    aMenuItem: Menu.Item,
    aSelect: Select,
    aSelectOption: Select.Option,
  },
  methods: {
    handleChange(v) {
      console.log(v);
    },
  },
};
</script>
<style lang="less" scoped>
.ant-row {
  margin: 10px;
}
</style>