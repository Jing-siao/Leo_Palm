const management = {
  template: `
      <div class="managementPage wrapBox">
         <h1>掌靜脈資料管理</h1>
        <form id="managementForm" 
        @submit.prevent="managementSubmit">
          <div class="animate-label">
            <input type="text" id="userId" required autocomplete="off" v-model="searchId" placeholder="身份證字號"/>
            <span></span>
          </div>
          <button class="submit">查詢</button>
        </form>
        <div class="tableWrap">
        <table class="tableInfo managementTable">
          <thead>
            <tr>
              <th v-for="title in titles">{{title}}</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="allData.length>0">
              <tr v-for="(item,index) in allData" :key="item.userId">
                <td>{{index + 1}}</td>
                <td>{{item.userId}}</td>
                <td>{{item.date}}</td>
                <td>{{item.hand}}</td>
                <td>
                  <div class="unlock">
                    <p v-if="item.locked">是</p>
                    <p v-else>否</p>
                    <button class="unlock" v-if="item.locked" @click="unlock(item)">
                      <i class="fas fa-lock-open"></i>
                      解鎖
                    </button>
                  </div>
                </td>
                <td>
                  <button class="delete" @click="deleteHandler(item)">刪除</button>
                </td> 
              </tr> 
            </template> 
            <template v-else>
              <tr>
                <td colspan="6" class="noData">暫無資料</td>
              </tr>
            </template>        
          </tbody>
        </table>
        </div>
      </div> 
      `,
  data() {
    return {
      searchId: "",
      titles: [
        "編號",
        "身分證字號",
        "建檔日期",
        "備註",
        "是否上鎖",
        "刪除",
      ],
      cacheData: {},
      cacheUserName: {},
      newArr: [],
      allData: [

        {
          userId: 'A123456789',
          date: '2021/01/13',
          hand: '左手',
          locked: false,
        },

        {
          userId: 'A123456788',
          date: '2021/01/13',
          hand: '左手',
          locked: false,
        },
        {
          userId: 'A123456787',
          date: '2021/01/13',
          hand: '左手',
          locked: true,
        },
        {
          userId: 'A123456786',
          date: '2021/01/13',
          hand: '左手',
          locked: false,

        },
        {
          userId: 'A123456785',
          date: '2021/01/13',
          hand: '右手',
          locked: false,

        },
        {
          userId: 'A123456784',
          date: '2021/01/13',
          hand: '左手',
          locked: false,

        },
        {
          userId: 'A123456783',
          date: '2021/01/13',
          hand: '右手',
          locked: false,

        },
        {
          userId: 'A123456782',
          date: '2021/01/13',
          hand: '左手',
          locked: true,

        },
        {
          userId: 'A123456781',
          date: '2021/01/13',
          hand: '左手',
          locked: false,

        },
        {
          userId: 'A123456780',
          date: '2021/01/13',
          hand: '右手',
          locked: false,

        },
        {
          userId: 'A123456779',
          date: '2021/01/13',
          hand: '右手',
          locked: false,

        },
        {
          userId: 'A123456778',
          date: '2021/01/13',
          hand: '右手',
          locked: false,

        },
        {
          userId: 'A123456777',
          date: '2021/01/13',
          hand: '右手',
          locked: false,

        },
        {
          userId: 'A123456776',
          date: '2021/01/13',
          hand: '右手',
          locked: false,

        },
        {
          userId: 'A123456775',
          date: '2021/01/13',
          hand: '右手',
          locked: false,

        },

      ],

    }
  },
  computed: {
    filterLock() {

    }
  },
  methods: {
    getData() {
      // 撈取所有資料
    },
    managementSubmit() {
      // let searchId = this.searchId;

      // 查詢後回傳一筆data

    },
    unlock(item) {
      if (confirm(`確定解鎖${item.userId} ?`)) {
        this.cacheData = item;
        this.cacheData.locked = !this.cacheData.locked;
        this.getData();
      }

    },
    deleteHandler(data) {
      var newIndex = this.allData.findIndex((item) => {
        return data.userId === item.userId;
      })
      if (confirm(`確定刪除${data.userId} ?`)) {
        this.allData.splice(newIndex, 1)
      }
    }
  },
  created() {
    this.getData();
  }
};
export default management;