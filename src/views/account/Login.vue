<template>
  <!--<div id="app">-->
  <!--  <el-input v-model="ruleForm.username" placeholder="姓名"></el-input>-->
  <!--</div>-->
  <!--内容区域-->
  <div class="content">
    <!--输入区域-->
    <div class="content_input">
      <!--表头区域-->
      <div class="title">
        <p>{{ $t("message.account.title") }}</p>
      </div>
      <!--表单区域-->
      <el-form
        status-icon
        :rules="rules"
        :model="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            type="text"
            autocomplete="off"
            v-model="ruleForm.username"
            :placeholder="$t('message.account.username')"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            autocomplete="off"
            v-model="ruleForm.password"
            :placeholder="$t('message.account.password')"
          ></el-input>
        </el-form-item>
        <div class="code">
          <el-form-item prop="code">
            <el-input
              v-model="ruleForm.code"
              :placeholder="$t('message.account.code')"
            ></el-input>
            <VerificationCode />
          </el-form-item>
        </div>
        <el-form-item>
          <el-button type="primary" style="width: 100%">{{
            $t("message.account.login")
          }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import "@/assets/js/ribbon";
import { reactive, toRefs } from "vue";
import VerificationCode from "@/components/common/VerificationCode/Index";
export default {
  name: "Login",
  components: { VerificationCode },
  setup() {
    // 用户名验证规则
    const checkUsername = (rule, value, callback) => {
      if (value.length < 5 || value.length > 15) {
        return callback(new Error("用户名的长度为5-15位!"));
      } else {
        callback();
      }
    };
    // 密码验证规则
    const checkPassword = (rule, value, callback) => {
      if (value.length < 5 || value.length > 15) {
        return callback(new Error("密码的长度为5-15位!"));
      } else {
        callback();
      }
    };
    // 验证码验证规则
    const checkCode = (rule, value, callback) => {
      if (value.length !== 4) {
        return callback(new Error("验证码的长度4位!"));
      } else {
        callback();
      }
    };
    // 表单配置项
    const formConfig = reactive({
      // 表单数据对象
      ruleForm: {
        username: "",
        password: "",
        code: "",
      },
      // 表单验证绑定的规则
      rules: {
        username: [{ validator: checkUsername, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }],
        code: [{ validator: checkCode, trigger: "blur" }],
      },
    });
    return { ...toRefs(formConfig) };
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 500px;
  height: 350px;
  box-sizing: border-box;
  padding: 0 50px;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(105, 105, 105, 0.07);
  background: rgba(255, 255, 255, 0.5);
  //background: rgba(255, 192, 203, 0.5);
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: myMove 1s ease-in-out alternate;
  overflow: hidden;
  transition: 1.5s;
}

.content_input {
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title {
  text-align: center;
  //letter-spacing: 10px;
  font-size: 24px;
  margin-bottom: 30px;
  font-weight: bold;
  color: #606266;
}

.code {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.code .el-input {
  width: 250px;
  margin-right: 10px;
  vertical-align: middle;
}

img {
  width: 120px;
  height: 40px;
}

@keyframes myMove {
  0% {
    width: 0;
    height: 5px;
  }

  10% {
    width: 50px;
    height: 5px;
  }

  15% {
    width: 100px;
    height: 5px;
  }

  20% {
    width: 150px;
    height: 5px;
  }

  25% {
    width: 200px;
    height: 5px;
  }

  30% {
    width: 250px;
    height: 5px;
  }

  35% {
    width: 300px;
    height: 5px;
  }

  40% {
    width: 350px;
    height: 5px;
  }

  45% {
    width: 450px;
    height: 5px;
  }

  50% {
    width: 500px;
    height: 5px;
  }

  55% {
    height: 30px;
  }

  60% {
    height: 60px;
  }

  65% {
    height: 90px;
  }

  70% {
    height: 120px;
  }

  75% {
    height: 150px;
  }

  80% {
    height: 180px;
  }

  85% {
    height: 210px;
  }

  90% {
    height: 240px;
  }

  95% {
    height: 240px;
  }

  100% {
    height: 300px;
  }
}
</style>
