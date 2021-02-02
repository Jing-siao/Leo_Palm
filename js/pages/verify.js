const verify = {
  template: `
      <div class="verifyPage wrapBox">
        <h1>掌靜脈驗證</h1>
        <form id="verifyForm" 
        @submit.prevent="verifySubmit">
          <div class="animate-label">
            <input type="text" id="userId" required autocomplete="off" v-model="userId" @change="verifyId"/>
            <label for="userId">身份證字號</label>
            <p class="warning" v-if="!isId">{{verifyErrMsg}}</p>
            <span></span>
          </div>
          <button class="sending spinner" v-if="sending">傳送中
            <div></div>
            <div></div>
            <div></div> 
          </button>
          <button class="submit" v-else @click="verifySubmit">驗證</button> 
          <popOut v-if="verifyFail" :msg="errMsg" @showErrMsg="isPopOut"></popOut>
        </form>
        <router-view></router-view>
      </div> 
      `,
  data() {
    return {
      userId: "",
      isId: false,
      verifyErrMsg: "",
      verifyFail: false,
      errMsg: "",
      sending: false,
    };
  },
  methods: {
    verifySubmit() {
      let userId = this.userId;
      this.sending = true;
      this.$router.push({ path: `/verify/${userId}` }).catch(() => {});
      // 驗證後回傳data
      const verifyUrl = "http://localhost:6101/PalmSecure/Client/Verify/";
      if (userId && this.isId) {
        axios({
          method: "post",
          url: verifyUrl,
          params: { id: userId },
        })
          .then((response) => {
            console.log(response);
            let parseData = JSON.parse(response.data);
            let resultData = parseData.wParam || parseData;
            this.sending = false;
            switch (parseInt(resultData)) {
              case 0: {
                this.verifyErrMsg = "成功";
                break;
              }
              case 1: {
                this.verifyErrMsg = "取消";
                break;
              }
              case 2: {
                this.verifyErrMsg = "失敗";
                break;
              }
              case 3: {
                this.verifyErrMsg = "此ID無登入資料";
                break;
              }
              default:
                this.verifyErrMsg = "資料錯誤";
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.verifyFail = true;
        this.errMsg = "資料格式有誤";
      }
    },
    verifyId() {
      let verifyFormat = /^[A-Z]{1}[1-2]{1}[0-9]{8}$/;
      this.isId = verifyFormat.test(this.userId);
      this.verifyErrMsg = !this.isId ? "身份證字號格式錯誤" : "";
    },
    isPopOut(val) {
      this.verifyFail = val;
    },
  },
};
export default verify;
