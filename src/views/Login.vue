<template>
  <ant-form-model
    ref="form"
    :model="form"
    :rules="rules"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 8 }"
  >
    <ant-form-model-item label="用户名" prop="username" has-feedback>
      <ant-input
        v-model="form.username"
        size="large"
        placeholder="用户名"
        v-focus
      />
    </ant-form-model-item>
    <ant-form-model-item label="密码" prop="password" has-feedback>
      <ant-input v-model="form.password" size="large" placeholder="密码" />
    </ant-form-model-item>
    <ant-form-model-item label="验证码" prop="captchatext" has-feedback>
      <ant-input v-model="form.captchatext" size="large" placeholder="验证码">
        <div slot="addonAfter" v-html="captchaImg" @click="getCaptcha" />
      </ant-input>
    </ant-form-model-item>
    <ant-form-model-item :wrapper-col="{ span: 8, offset: 8 }">
      <ant-button type="primary" block size="large" @click="onLogin">
        登录
      </ant-button>
    </ant-form-model-item>
    <ant-form-model-item :wrapper-col="{ span: 8, offset: 8 }">
      <ant-button type="danger" block size="large" @click="onReset">
        重置
      </ant-button>
    </ant-form-model-item>
    <ant-form-model-item :wrapper-col="{ span: 8, offset: 8 }">
      <ant-button type="dashed" block size="large" @click="toRegist">
        注册
      </ant-button>
    </ant-form-model-item>
  </ant-form-model>
</template>
<script>
import { Button, FormModel, Input, Message } from "ant-design-vue";
import { captcha, login, getUserInfo } from "@/api";
export default {
  components: {
    antFormModel: FormModel,
    antFormModelItem: FormModel.Item,
    antInput: Input,
    antButton: Button,
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
        captchatext: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "change",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "change",
          },
        ],
        captchatext: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "change",
          },
        ],
      },
      captchaImg: "",
    };
  },
  created() {
    this.getCaptcha();
  },
  methods: {
    async getCaptcha() {
      let data = await captcha();
      if (data.code === "0") {
        this.captchaImg = data.data;
      } else {
        Message.error("获取验证码失败");
      }
    },
    onLogin() {
      this.$refs.form.validate(async (valid, rules) => {
        if (valid) {
          let data = await login(this.form);
          if (data.code === "0") {
            localStorage.setItem("token", data.data);
            this.$store.commit("setToken", data.data);
            getUserInfo({ token: data.data }).then((res) => {
              if (res.code === "0") {
                this.$store.commit("setUserName", res.data.username);
                this.$store.commit("setPhoneNumber", res.data.phonenumber);
                this.$store.commit("setAvatar", res.data.avatar);
              } else {
                Message.error(res.msg || `${res.name}: ${res.message}`);
                localStorage.removeItem("token");
                this.$store.commit("setToken", "");
                this.$router.replace({ path: "/login" });
              }
            });
            Message.success(data.msg);
            this.$router.replace("/");
          } else {
            Message.error(data.msg || data.message);
            this.$refs.form.resetFields();
            this.getCaptcha();
          }
        } else {
          for (let rule in rules) {
            Message.warning(rules[rule][0].message);
            break;
          }
        }
      });
    },
    onReset() {
      this.$refs.form.resetFields();
    },
    toRegist() {
      this.$router.replace("/regist");
    },
  },
};
</script>