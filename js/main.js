// import '../node_modules/babel-polyfill/dist/polyfill.min.js';

import router from './router.js';
new Vue({
  el: '#app',
  router,
  data: {
    username: '國眾電腦',
    logoSrc: './img/logo.png',
    loginOutState: false,
  },
  methods: {
    loginOut() {
      this.loginOutState = false;
    },
    enter(el, done) {
      window.setTimeout(() => {
        el.alert("Hello!"), 1000
      });
      done();

    },
  },


})
