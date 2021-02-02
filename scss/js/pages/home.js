const home = {
  template: `
    <div class="homePage">
      <div class="bg"></div>
      <div class="palmWrap">
        <img :src="centerSrc" alt="中間手掌">
      </div>
      <ul class="indexMenu">
        <li v-for="menu in menus">
          <router-link :to="menu.link">
            <p>{{menu.title}}</p>
            <i><span class="light"></span></i>
          </router-link>
        </li>
      </ul>
    </div>
    ` ,
  data() {
    return {
      menus: [
        {
          title: '建檔',
          link: '/create',
        },
        {
          title: '驗證',
          link: '/verify',
        },
        {
          title: '辨識',
          link: '/identify',
        },
        {
          title: '資料管理',
          link: '/management',
        },
        {
          title: '操作紀錄',
          link: '/search',
        }

      ],
      centerSrc: './img/中間手掌.png',
    }
  }

};
export default home;
