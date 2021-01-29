const signUp = {
  template: `
      <div class="signUpPage wrapBox">
        <h1>掌靜脈管理系統</h1>
        <form id="signUpForm" @submit.prevent="signUpSubmit">
          <div class="animate-label" v-for="label in signUpLabels" :key="label.id">
            <input :type="label.type" :id="label.id" required autocomplete="off" 
              v-model="label.inputData" @change="verifyData(label)" />
            <label :for="label.id">{{label.title}}</label>
            <span></span>
            <p class="warning" v-if="!label.verifyInputData">{{label.warning}}</p>
          </div>
          <button class="submit">註冊</button>
        </form>
      </div> 
      `,
  data() {
    return {
      signUpLabels: [
        {
          title: "身份證字號",
          id: "userId",
          type: "text",
          inputData: "",
          warning:  "",
          verifyInputData: true
        },
        {
          title: "姓名",
          id: "username",
          type: "text",
          inputData: "",
          warning: "",
          verifyInputData: true
        },
        {
          title: "密碼",
          id: "password",
          type: "password",
          inputData: "",
          warning: "", 
          verifyInputData: true
        },
        {
          title: "確認密碼",
          id: "checkPassword",
          type: "password",
          inputData: "",
          warning: "",
          verifyInputData: true
        },
      ],
      signUpData: {
        id: "",
        userName: "",
        password: "",
        checkPassword: "",
      },
    };
  },
  methods: {
    signUpSubmit() {
      var signUpObj = this.signUpData;
      var isMember = JSON.parse(localStorage.getItem(signUpObj.id)) || [];
      if (signUpObj.id !== isMember.id && this.signUpLabels.every(e => e.warning === "")) {
          localStorage.setItem(signUpObj.id, JSON.stringify(signUpObj));
          alert("註冊成功");
          this.$router.push({ name: "home" });
      } else if(signUpObj.id === isMember.id) {
          this.signUpLabels.forEach(item => {
            item.inputData = "";
            item.verifyInputData = true;
        });
          alert("此身份證字號已註冊")
      } else 
          alert("請填寫正確的資料格式");
    },
    verifyData(data) {
      let verifyId = /^[A-Z]{1}[1-2]{1}[0-9]{8}$/;
      let verifyName = /^[\u4e00-\u9fa5]{2,4}$/;
      let verifyPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}\[\]:";'<>?,.\/]).{6,12}$/;
      if(data.id === 'userId') {
          this.signUpData.id = data.inputData;
          data.verifyInputData = false;
          data.warning = !verifyId.test(data.inputData) ? "身份證字號格式錯誤" : "";
      } else if(data.id === 'username') {
          this.signUpData.userName = data.inputData;
          data.verifyInputData = false;
          data.warning = !verifyName.test(data.inputData) ? "請輸入中文字且長度限於2-4個字" : "";
      } else if(data.id === 'password') {
          this.signUpData.password = data.inputData;
          data.verifyInputData = false;
          data.warning = !verifyPassword.test(data.inputData) ? "密碼必須由6-12位字母、數字、特殊符號組成" : "";
      } else if(data.id === 'checkPassword') {
          this.signUpData.checkPassword = data.inputData;
          data.verifyInputData = false;
          data.warning = !(data.inputData === this.signUpData.password) ? "與上述密碼不相同" : "";
      }
    }
  },
}

export default signUp;
