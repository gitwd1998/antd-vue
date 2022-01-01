import Aside from "@/layout/aside/index.js";
import Header from "@/layout/header/index.js";
import { Layout } from "ant-design-vue";
import "@/layout/index.less";
import nav from "@/assets/json/nav.json";

export default {
  name: 'Layout',
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
  data() {
    return {
      nav,
    }
  },
  render() {
    return (
      <Layout>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout>
          <Layout.Sider collapsible breakpoint="lg" width="300px">
            <Aside nav={this.nav} mode="inline" theme="dark" onOpenChange={this.handleOpenChange} />
          </Layout.Sider>
          <Layout.Content>
            <router-view />
          </Layout.Content>
        </Layout>
      </Layout>
    )
  },
  methods: {
    handleOpenChange(openKeys) {
      console.log(openKeys);
    },
  }
}