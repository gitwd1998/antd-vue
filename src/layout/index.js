import Aside from "@/layout/aside/index.js";
import Header from "@/layout/header/index.js";
import { Layout } from "ant-design-vue";
import "@/layout/index.less";
export default {
  name: 'Layout',
  render() {
    return (
      <Layout>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout>
          <Layout.Sider collapsible breakpoint="lg" width="300px">
            <Aside />
          </Layout.Sider>
          <Layout.Content>
            <router-view />
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }
}