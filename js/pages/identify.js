const identify = {
  template: `
      <div class="identifyPage wrapBox">
        <div class="scanWrap">
          <div class="strScan" v-if="strScan">
            <button @click="idResult">開始辨識</button>
          </div>
          <div :class="{'scan':isScan,'result':isResult}" v-else>{{ result }}
            <p class=warning v-if="noResult">查無資料</p>
            </div>
          <div class="mask"></div>
        </div>
      </div> 
          `,
  data: function () {
    return {
      result: "辨識中",
      isScan: true,
      isResult: false,
      noResult: false,
      strScan: true,
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
    idResult() {
      this.strScan = false;
      // const identifyUrl =
      //   "http://localhost:6102/PalmSecure/Client/Identify/all";
      // axios({
      //   methods: "post",
      //   url: identifyUrl,
      // }).then((response) => {
      //   console.log(response);
      // this.timeOut();

      // }).catch((error) => {
      //   console.log(error);
      // this.timeOut();
      // })

    },
    timeOut() {
      setTimeout(() => {
        this.isResult = true;
        this.isScan = true;
        this.strScan = true;
        this.result !== "" ? (this.noResult = false) : (this.noResult = true);
      }, 3000);

    }

  },
  mounted() {
  },
};
export default identify;
