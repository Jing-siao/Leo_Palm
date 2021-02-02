const verify = {
  template: `
      <div class="verifyPage wrapBox">
        <h1>掌靜脈驗證</h1>
        <form id="verifyForm" 
        @submit.prevent="verifySubmit">
          <div class="animate-label">
            <input type="text" id="userId" required autocomplete="off" v-model="userId"/>
            <label for="userId">身份證字號</label>
            <span></span>
          </div>
          <button class="submit">驗證</button>
        </form>
        <router-view></router-view>
      </div> 
      `,
  data() {
    return {
      userId: '',
    }
  },
  methods: {
    verifySubmit() {
      let userId = this.userId;
      this.$router.push({ path: `/verify/${userId}` })

      // 驗證後回傳data

    }
  }
}
export default verify;