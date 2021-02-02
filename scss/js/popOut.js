const popOut = {
  template: `
      <div class="popOutPage" v-if="popOut">
        <div class="popOutWrap" @click="closePop">
        <i class="fas fa-times"></i>
        <p>{{msg}}</p> 
        </div>
      </div> 
          `,
  props: {
    msg: String
  },
  data() {
    return {
      popOut: true,
    };
  },
  methods: {
    closePop() {
      this.popOut = false;
      this.$emit("showErrMsg", false);
    },
  },
};
export default popOut;
