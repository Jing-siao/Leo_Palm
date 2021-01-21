const identify = {
  template: `
      <div class="identifyPage wrapBox">
        <div class="scanWrap">
          <div :class="{'scan':isScan,'result':isResult}">{{result}}
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
    hasResult() {
      setTimeout(() => {
        this.isResult = true;
        this.isScan = false;
        this.result = 'A123456789';
      }, 3000);
    },
    hasNoResult() {
      setTimeout(() => {
        this.isResult = true;
        this.isScan = false;
        this.noResult = true;
        this.result = '';
      }, 7000);
    },
    clear() {
      setTimeout(() => {
        this.isResult = false;
        this.isScan = true;
        this.result = '辨識中';
      }, 4000);
    }

  },
  mounted() {
    this.hasResult();
    this.clear();
    this.hasNoResult();
  }
}
export default identify;