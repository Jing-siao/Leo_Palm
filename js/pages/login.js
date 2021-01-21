const login = {
  template: `
      <div class="loginPage wrapBox">
        <h1>掌靜脈管理系統</h1>
        <form id="loginForm" 
        @submit.prevent="loginSubmit">
          <div class="animate-label" v-for="label in loginLabels">
            <input :type="label.type" :id="label.id" required autocomplete="off" />
            <label :for="label.id">{{label.title}}</label>
            <span></span>
          </div>
          <button class="submit">登入</button>
        </form>
      </div> 
      `,
  data() {
    return {
      loginLabels: [
        {
          title: "身份證字號",
          id: "userId",
          type: "text",

        },
        {
          title: "密碼",
          id: "password",
          type: "password",

        }
      ]
    }
  },
  methods: {
    loginSubmit() {

      // 登入成功後自動挑轉首頁
      this.$router.push({ name: 'home' })
    }
  }
}
export default login;