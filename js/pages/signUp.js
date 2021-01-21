const signUp = {
  template: `
      <div class="signUpPage wrapBox">
        <h1>掌靜脈管理系統</h1>
        <form id="signUpForm" 
        @submit.prevent="signUpSubmit">
          <div class="animate-label" v-for="label in signUpLabels" :key="label.id">
            <input :type="label.type" :id="label.id" required autocomplete="off" v-model="label.tempData" />
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
          tempData: "",
          warning:  "",             //"身份證字號重覆",
          verifyInputData: true
        },
        {
          title: "姓名",
          id: "username",
          type: "text",
          tempData: "",
          warning: "",             //"姓名不得包含特殊字元",
          verifyInputData: true
        },
        {
          title: "密碼",
          id: "password",
          type: "password",
          tempData: "",
          warning: "",             //"密碼不得有符號",
          verifyInputData: true
        },
        {
          title: "確認密碼",
          id: "checkPassword",
          type: "password",
          tempData: "",
          warning: "",             //"密碼兩者不相同",
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
      var signUpArr = [];
      this.signUpLabels.forEach(function (item) {
        signUpArr.push(item.registerData);
      });
      var signUpObj = this.signUpData;
      var [customerId, password, userName, checkPassword] = signUpArr;
      signUpObj.customerId = customerId;
      signUpObj.userName = userName;
      signUpObj.password = password;
      signUpObj.checkPassword = checkPassword;
      var member = JSON.parse(localStorage.getItem(customerId)) || [];
      if (customerId !== member.customerId) {
        localStorage.setItem(customerId, JSON.stringify(signUpObj));
        alert("註冊成功");
        // 登入成功後自動轉首頁
        this.$router.push({ name: "home" });
      }
    },
  },
  watch: {
    signUpLabels: [{
      handler: function(obj) {
        console.log(obj)
        let verifyId = /^[A-Z]{1}[1-2]{1}[0-9]{8}$/;
        let verifyName = new RegExp("[\\u4e00-\\u9fa5]$");
        // let verifyPassword = /^(?=.*?[a-z)(?=.*>[A-Z])(?=.*?[0-9])[a-zA_Z0-9]{6,10}$/;
        let [id, userName, password, checkPassword] = obj;
        // signUpData = obj;
        // let [id, userName, password, checkPassword] = obj;
        // console.log(verifyName.test(name.tempData))
        // console.log(signUpData)
        console.log(id)
        console.log(userName)
        console.log(password)
        console.log(checkPassword)
        // if(!verifyId.test(id.tempData)) {
        //   id.verifyInputData = false;
        //   id.warning = '身份證字號不得重覆或包含特殊字元';
        // } else
        //   id.warning = '';
        
      },
      deep: true
    }
    ]
  }
};

export default signUp;
