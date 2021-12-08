import { Icon, Menu } from "ant-design-vue";
import "@/layout/header/index.less";
export default {
  name: 'Header',
  render() {
    return (
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="1">
          <Icon type="gold" />
          <span>nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="gold" />
          <span>nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="gold" />
          <span>nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="gold" />
          <span>nav 4</span>
        </Menu.Item>
      </Menu >
    )
  },
};
