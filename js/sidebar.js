const sidebar = {
  template: `
   <div class="sidebar">
      <ul class="sideMenu">
        <li v-for="menu in menus">
          <router-link :to="menu.link">
            <p>{{menu.title}}</p>
          </router-link>
        </li>
      </ul>
    </div> 
      `,
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
    }
  },
  methods: {

  }
}
export default sidebar;