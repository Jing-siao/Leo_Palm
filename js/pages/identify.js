const identify = {
  template: `
      <div class="identifyPage wrapBox">
        <div class="scanWrap">
          <div :class="{'scan':isScan,'result':isResult}">{{ result }}
          <p class=warning v-if="noResult">查無資料</p>
          </div>    
          <div class="mask"></div>
        </div>
      </div> 
          `,
  data: function () {
    return {
      result: '辨識中',
      isScan: true,
      isResult: false,
      noResult: false,
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
    idResult() {
      const identifyUrl = "http://localhost:6102/PalmSecure/Client/Identify/all";
      axios({
        methods: "post",
        url: identifyUrl,
      }).then((response) => {
          console.log(response);
      }).catch((error) => {
          console.log(error);
      })
      setTimeout(() => {
        this.isResult = true;
        this.isScan = false;
        this.result = '';
        this.result !== "" ? (this.noResult = false) : (this.noResult = true);
      }, 3000);
    },
  },
  mounted() {
    this.idResult();
  }
}
export default identify;