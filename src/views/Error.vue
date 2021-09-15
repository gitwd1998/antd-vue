<template>
  <ant-result status="404" title="404" sub-title="抱歉, 此页面未找到.">
    <template #extra>
      <ant-button type="primary" @click="$router.replace('/')">
        回到首页
      </ant-button>
    </template>
  </ant-result>
</template>
<script>
import { Button, Result } from "ant-design-vue";
export default {
  components: {
    antResult: Result,
    antButton: Button,
  },
};
</script>