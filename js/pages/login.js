const login = {
  template: `
      <div class="loginPage wrapBox">
        <h1>掌靜脈管理系統</h1>
        <form id="loginForm" 
        @submit.prevent="loginSubmit">
          <div class="animate-label" v-for="label in loginLabels">
            <input :type="label.type" :id="label.id" required autocomplete="off" 
              v-model="label.inputData" @change="verifyData(label)" />
            <label :for="label.id">{{label.title}}</label>
            <span></span>
            <p class="warning" v-if="!label.verifyInputData">{{label.warning}}</p>
          </div>
          <button class="submit">登入</button>
        </form>
      </div> 
      `,
  data() {
    return {
      loginLabels: [
        {
          title: "身份證字號",
          id: "userId",
          type: "text",
          inputData: "",
          warning:  "",
          verifyInputData: true
        },
        {
          title: "密碼",
          id: "password",
          type: "password",
          inputData: "",
          warning:  "",
          verifyInputData: true
        }
      ],
      loginData: {
        id: "",
        password: "",
      },
    }
  },
  methods: {
    loginSubmit() {
      var loginObj = this.loginData;
      var isMember = JSON.parse(localStorage.getItem(loginObj.id)) || [];
      console.log(isMember)
      if(this.loginLabels.some(e => e.warning !== "")) 
        alert("請填寫正確的資料格式"); 
      else if(loginObj.id !== isMember.id)
        alert("此身分證字號未註冊")
      else if(loginObj.password !== isMember.password) 
        alert("密碼錯誤")
      else {
          alert("登入成功")
          this.$router.push({ name: 'home' }) // 登入成功後自動挑轉首頁
        }
    },
    verifyData(data) {
      let verifyId = /^[A-Z]{1}[1-2]{1}[0-9]{8}$/;
      let verifyPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}\[\]:";'<>?,.\/]).{6,12}$/;
      if(data.id === 'userId') {
          this.loginData.id = data.inputData;
          data.verifyInputData = false;
          data.warning = !verifyId.test(data.inputData) ? "身份證字號格式錯誤" : "";
      } else if(data.id === 'password') {
          this.loginData.password = data.inputData;
          data.verifyInputData = false;
          data.warning = !verifyPassword.test(data.inputData) ? "密碼必須由6-12位字母、數字、特殊符號組成" : "";
      } 
    }
  }
}
export default login;