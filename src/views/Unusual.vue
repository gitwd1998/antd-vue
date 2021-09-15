<template>
  <ant-result status="500" title="500" sub-title="抱歉, 服务器发生了错误.">
    <template #extra>
      <ant-button type="primary" @click="$router.go(-1)"> 返回 </ant-button>
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