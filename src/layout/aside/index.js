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
      <Menu.SubMenu {...{ attrs: menu }} key={menu.name}>
        <template slot="title">
          <Icon type={menu.icon} />
          <span>{menu.tag + " " + menu.lable}</span>
        </template>
        {menu.item.map(item => {
          return item.item?.length ? (
            <Sub menu={item} />
          ) : (
            <Menu.Item {...{ attrs: item }} key={item.name}>
              <router-link to={{ name: item.name }} replace>
                <Icon type={item.icon} />
                <span>{item.tag + " " + item.lable}</span>
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
  props: {
    nav: {
      type: Array,
      default() {
        return []
      }
    }
  },
  render() {
    return (
      < Menu {...{ attrs: this.$attrs }} {...{ on: this.$listeners }}>
        {this.nav.map((menu) => {
          return menu.item?.length ? (
            <Sub menu={menu} />
          ) : (
            <Menu.Item {...{ attrs: menu }} key={menu.name}>
              <router-link to={{ name: menu.name }} replace>
                <Icon type={menu.icon} />
                <span>{menu.tag + " " + menu.lable}</span>
              </router-link>
            </Menu.Item>
          );
        })}
      </ Menu >
    );
  },
};