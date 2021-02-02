const create = {
  template: `
      <div class="createPage wrapBox">
        <h1>掌靜脈建檔</h1>
        <form id="createForm" 
        @submit.prevent="createSubmit">
          <div class="animate-label">
            <input type="text" id="userId" required autocomplete="off" v-model="userId" required
              @change="verifyId" />
            <label for="userId">身份證字號</label>
            <p class="warning" v-if="!isId">{{verifyErrMsg}}</p>
            <span></span>
          </div>
          <div class="selectHand">
          <p>設置:</p>
           <div v-for="select in selects" :key="select.radioId">
              <input type="radio" v-model="selected" :value="select.radioValue" :id="select.radioId"><label :for="select.radioId"
              class="labelRadio">{{select.text}}</label>
            </div>
          </div>
          <div class="center" v-if="sending">
            <button :class="{'sending':isSending,'success':isSuccess,'fail':isFail}" @click.prevent>{{ resultText }}</button>
          </div>
          <button class="submit" v-else>送出</button>
          <popOut v-if="verifyFail" :msg="errMsg" @showErrMsg="isPopOut"></popOut>
        </form>
      </div> 
          `,
  data() {
    return {
      selected: "",
      userId: "",
      resultText: "",
      isSending: false,
      sending: false,
      isFail: false,
      isSuccess: false,
      isId: false,
      verifyErrMsg: "",
      selects: [
        {
          text: "左手",
          radioValue: "left",
          radioId: "leftHand",
        },
        {
          text: "右手",
          radioValue: "right",
          radioId: "rightHand",
        },
      ],
      verifyFail: false,
      errMsg: "",
    };
  },
  methods: {
    createSubmit() {
      let userId = this.userId;
      let selected = this.selected;
      const createUrl = "http://localhost:6101/PalmSecure/Client/Enroll/";
      if (userId && selected && this.isId) {
        axios({
          method: "post",
          url: createUrl,
          params: { id: userId },
        })
          .then((response) => {
            let parseData = JSON.parse(response.data);
            let resultData = parseData.wParam || parseData;
            this.sandingState();
            switch (parseInt(resultData)) {
              case 0: {
                this.resultText = "成功";
                break;
              }
              case 1: {
                this.isFail = true;
                this.resultText = "已取消";
                break;
              }
              case 2: {
                this.isFail = true;
                this.resultText = "失敗";
                break;
              }
              default: {
                this.isFail = true;
                this.resultText = "資料錯誤";
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.verifyFail = true;
        this.errMsg = "資料格式有誤";
      }
      // this.$router.push({ path: `/create/${userId}` })
    },
    sandingState() {
      setTimeout(() => {
        this.successState();
      });
      setTimeout(() => {
        this.resetState();
      }, 5000);
    },
    successState() {
      this.sending = true;
      this.isSuccess = true;
      this.isSending = true;
    },
    resetState() {
      this.userId = "";
      this.selected = "";
      this.resultText = "";
      this.sending = false;
      this.isSuccess = false;
      this.isFail = false;
      this.isSending = true;
    },
    verifyId() {
      let verifyFormat = /^[A-Z]{1}[1-2]{1}[0-9]{8}$/;
      this.isId = verifyFormat.test(this.userId)
      this.verifyErrMsg = !this.isId ? "身份證字號格式錯誤" : "";
    },
    isPopOut(val) {
      this.verifyFail = val;
    },
  }
};
export default create;
