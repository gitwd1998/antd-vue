<template>
  <ant-form :form="registForm" :label-col="{ span: 8 }" @submit="handleSubmit">
    <ant-form-item label="用户名" :wrapper-col="{ span: 8 }">
      <ant-input
        size="large"
        placeholder="用户名"
        v-decorator="[
          'username',
          {
            rules: [{ required: true, message: '请输入用户名' }],
          },
        ]"
      />
    </ant-form-item>
    <ant-form-item label="手机号码" :wrapper-col="{ span: 8 }">
      <ant-input
        size="large"
        placeholder="手机号码"
        v-decorator="[
          'phonenumber',
          {
            rules: [{ required: true, message: '请输入手机号码' }],
          },
        ]"
      />
    </ant-form-item>
    <ant-form-item label="密码" :wrapper-col="{ span: 8 }">
      <ant-input
        size="large"
        placeholder="密码"
        v-decorator="[
          'password',
          {
            rules: [{ required: true, message: '请输入密码' }],
          },
        ]"
      />
    </ant-form-item>
    <ant-form-item :wrapper-col="{ span: 8, push: 8 }">
      <ant-button type="primary" block size="large" html-type="submit"
        >注册</ant-button
      >
    </ant-form-item>
    <ant-form-item :wrapper-col="{ span: 8, push: 8 }">
      <ant-button
        type="danger"
        block
        size="large"
        @click="registForm.resetFields()"
        >重置</ant-button
      >
    </ant-form-item>
    <ant-form-item :wrapper-col="{ span: 8, push: 8 }">
      <ant-button
        type="dashed"
        block
        size="large"
        @click="$router.replace('/login')"
        >登录</ant-button
      >
    </ant-form-item>
  </ant-form>
</template>
<script>
import { Button, Form, Input, Message } from "ant-design-vue";
import { regist } from "@/api";
export default {
  components: {
    antForm: Form,
    antFormItem: Form.Item,
    antInput: Input,
    antButton: Button,
  },
  data() {
    return {
      registForm: this.$form.createForm(this, { name: "cood" }),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.registForm.validateFields(async (err, val) => {
        if (!err) {
          let { code, msg } = await regist(val);
          if (code === "0") {
            Message.success(msg);
            this.$router.replace("/login");
          } else {
            Message.error(msg);
            this.registForm.resetFields();
          }
        }
      });
    },
  },
};
</script>