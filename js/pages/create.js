
const create = {
  template: `
      <div class="createPage wrapBox">
        <h1>掌靜脈建檔</h1>
        <form id="createForm" 
        @submit.prevent="createSubmit">
          <div class="animate-label">
            <input type="text" id="userId" required autocomplete="off" v-model="userId"/>
            <label for="userId">身份證字號</label>
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
            <button :class="{'sending':isSending,'success':isSuccess}" @click.prevent>{{successText}}      
            </button>
          </div>
          <button class="submit" v-else>送出</button>
        </form>
      </div> 
          `,
  data() {
    return {
      selected: '',
      userId: '',
      successText: '',
      sending: false,
      isSending: true,
      isSuccess: false,
      warning: false,
      selects: [
        {
          text: '左手',
          radioValue: 'left',
          radioId: 'leftHand',

        },
        {
          text: '右手',
          radioValue: 'right',
          radioId: 'rightHand',

        },
      ]
    }
  },
  methods: {
    createSubmit() {
      let userId = this.userId;
      let selected = this.selected;
      const createUrl = "http://localhost:6101/PalmSecure/Client/Enroll/";
      axios({
        method: "post",
        url: createUrl,
        params: { id: userId },
      }).then((response) => {
          userId && selected ? this.sandingState() : alert('請填寫所有欄位');
          console.log(response);
      }).catch((error) => {
        console.log(error);
      })
  
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
      this.successText = '成功';
      this.warning = false;
    },
    resetState() {
      this.userId = '';
      this.selected = '';
      this.successText = '';
      this.sending = false;
      this.isSending = true;
      this.isSuccess = false;
      this.warning = false;
    }
  }
}
export default create;