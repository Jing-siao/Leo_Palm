import router from "./router.js";

new Vue({
  el: "#app",
  router,
  data: {
    userName: "",
    logoSrc: "./img/logo.png",
    loginOutState: false,
  },
  methods: {
    getUserName() {
      if (localStorage.getItem("userName")) {
        this.userName = localStorage.getItem("userName");
        return (this.loginOutState = true);
      } else return this.loginOutState;
    },
    logOut() {
      localStorage.removeItem("userName");
      this.loginOutState = false;
    },
  },
  beforeUpdate() {
    this.getUserName();
  },
  created() {
    this.getUserName();
  },
});
