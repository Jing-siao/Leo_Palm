const popOut = {
  template: `
      <div class="popOutPage" v-if="popOut">
        <div class="popOutWrap" @click="closePop">
        <i class="fas fa-times"></i>
        <p >{{popOutText}}</p> 
        </div>
      </div> 
          `,
  props: ["errMsg"],
  data() {
    return {
      popOut: true,
      popOutText: "測試",
    };
  },
  methods: {
    closePop() {
      this.popOut = false;
    },
    showErrMsg() {
      this.$emit("errMsg", this.popOutText)
    }
  }
};
export default popOut;
