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
            <button :class="{'sending':isSending,'success':isSuccess}" @click.prevent>{{resultText}}      
            </button>
          </div>
          <button class="submit" v-else>送出</button>
        </form>
      </div> 
          `,
  data() {
    return {
      selected: "",
      userId: "",
      resultText: "",
      sending: false,
      isSending: true,
      isSuccess: false,
      warning: false,
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
            this.sandingState();
            let parseData = JSON.parse(response.data);
            let resultData = parseData.wParam || parseData;
            switch (parseInt(resultData)) {
              case 0: {
                this.resultText = "成功";
                break;
              }
              case 1: {
                this.resultText = "取消";
                break;
              }
              case 2: {
                this.resultText = "失敗";
                break;
              }
              default: this.resultText = "資料錯誤";
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else alert("請填寫所有欄位");

      // 驗證後回傳是否成功

      // this.$router.push({ path: `/create/${userId}` })
    },
    sandingState() {
      this.sending = true;
      this.warning = true;
      setTimeout(() => {
        this.successState();
      });
      setTimeout(() => {
        this.resetState();
      }, 5000);
    },
    successState() {
      this.isSuccess = true;
      this.isSending = false;
      this.warning = false;
    },
    resetState() {
      this.userId = "";
      this.selected = "";
      this.resultText = "";
      this.sending = false;
      this.isSending = true;
      this.isSuccess = false;
      this.warning = false;
    },
    verifyId() {
      let verifyFormat = /^[A-Z]{1}[1-2]{1}[0-9]{8}$/;
      this.isId = verifyFormat.test(this.userId)
      this.verifyErrMsg = !this.isId ? "身份證字號格式錯誤" : "";
    }
  }
};
export default create;
