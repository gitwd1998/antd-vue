import nav from "@/assets/json/nav.json";
import { Icon, Menu } from "ant-design-vue";
const Sub = {
  name: 'Sub',
  functional: true,
  props: {
    menu: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: { Sub },
  render(h, context) {
    const { menu } = context.props
    return (
      <Menu.SubMenu key={menu.name} disabled={menu.disabled}>
        <template slot="title">
          <Icon type={menu.icon} />
          <span>{menu.title + " " + menu.lable}</span>
        </template>
        {menu.item.map(item => {
          return item.item.length ? (
            <Sub menu={item} />
          ) : (
            <Menu.Item key={item.name} disabled={item.disabled} >
              <router-link to={{ name: item.name }} replace>
                <Icon type={item.icon} />
                <span>{item.title + " " + item.lable}</span>
              </router-link>
            </Menu.Item>
          )
        })}
      </Menu.SubMenu >
    )
  }
}
export default {
  name: 'Aside',
  components: { Sub },
  computed: {
    path() {
      return this.$route.path.split('/')
    },
    openKeys() {
      return [this.path[1] || this.path[0]]
    },
    selectedKeys() {
      for (let i = this.path.length - 1; i > -1; i--) {
        if (this.path[i]) { return [this.path[i]] }
      }
    },
  },
  methods: {
    handleOpenChange(openKeys) {
      console.log(openKeys);
    },
  },
  render() {
    const { handleOpenChange } = this
    return (
      < Menu mode="inline" theme="dark" onOpenChange={handleOpenChange}>
        {nav.map((menu) => {
          return menu.item.length ? (
            <Sub menu={menu} />
          ) : (
            <Menu.Item key={menu.name} disabled={menu.disabled} >
              <router-link to={{ name: menu.name }} replace>
                <Icon type={menu.icon} />
                <span>{menu.title + " " + menu.lable}</span>
              </router-link>
            </Menu.Item>
          );
        })}
      </ Menu >
    );
  },
};