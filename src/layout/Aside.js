import nav from "@/assets/json/nav.json";
import { Icon, Menu } from "ant-design-vue";
export default {
  data() {
    return {
      nav,
      defaultOpenKeys: [this.$route.path.match(/(\/[^/]*)+?/g)[0] || ""],
      defaultSelectedKeys: [this.$route.path.match(/(\/[^/]*)+?/g)[1] || ""],
    };
  },
  methods: {
    handleOpenChange(openKeys) {
      console.log(openKeys);
    },
  },
  render() {
    const { nav, defaultOpenKeys, defaultSelectedKeys, handleOpenChange } = this
    return (< Menu mode="inline" theme="dark" defaultOpenKeys={defaultOpenKeys} defaultSelectedKeys={defaultSelectedKeys} onOpenChange={handleOpenChange}>
      {
        nav.map((menu) => {
          return menu.item.length ? (
            <Menu.SubMenu key={menu.to} disabled={menu.disabled}>
              <template slot="title">
                <Icon type={menu.icon} />
                <span>{menu.title + " " + menu.name}</span>
              </template>
              {menu.item.map(item => {
                return item.item.length ? (
                  <Menu.Submenu key={item.to} disabled={item.disabled}>
                    <template slot="title">
                      <Icon type={item.icon} />
                      <span>{item.title + " " + item.name}</span>
                    </template>
                    <Menu.Item key={item.to} disabled={item.disabled} >
                      <router-link to={menu.to + item.to}>
                        <Icon type={item.icon} />
                        <span>{item.title + " " + item.name}</span>
                      </router-link>
                    </Menu.Item>
                  </Menu.Submenu>
                ) : (
                  <Menu.Item key={item.to} disabled={item.disabled} >
                    <router-link to={menu.to + item.to}>
                      <Icon type={item.icon} />
                      <span>{item.title + " " + item.name}</span>
                    </router-link>
                  </Menu.Item>
                )
              })}
            </Menu.SubMenu>
          ) : (
            <Menu.Item key={menu.to} disabled={menu.disabled} >
              <router-link to={menu.to}>
                <Icon type={menu.icon} />
                <span>{menu.title + " " + menu.name}</span>
              </router-link>
            </Menu.Item>
          );
        })
      }
    </ Menu >);
  },
};