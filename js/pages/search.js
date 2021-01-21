const search = {
  template: `
      <div class="searchPage wrapBox">
         <h1>掌靜脈操作紀錄</h1>
        <form id="searchForm" 
        @submit.prevent="searchSubmit">
          <div class="animate-label">
            <input type="text" id="userId" required autocomplete="off" v-model="searchId" placeholder="身份證字號"/>
            <span></span>
          </div>
          <button class="submit">查詢</button>
        </form>
        <div class="tableWrap">
        <table class="tableInfo searchTable">
          <thead>
            <tr>
              <th v-for="title in titles">{{title}}</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="allData.length>0">
              <tr v-for="(item,index) in allData" :key="index">
                <td>{{index + 1}}</td>
                <td>{{item.userId}}</td>
                <td>{{item.operating}}</td>
                <td>{{item.result}}</td>
                <td>{{item.dateTime}}</td>
                <td>{{item.hand}}</td> 
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
        "操作指令",
        "操作訊息",
        "操作時間",
        "備註",
      ],
      allData: [
        {
          userId: 'A123456789',
          operating: '建檔',
          result: '成功',
          dateTime: '2021/01/13 15:02:40',
          hand: '左手',

        },

        {
          userId: 'A123456788',
          operating: '建檔',
          result: ' 資料庫連線異常',
          dateTime: '2021/01/13 15:02:40',
          hand: '左手',

        },
        {
          userId: 'A123456787',
          operating: '建檔',
          result: '成功',
          dateTime: '2021/01/13 15:02:40',
          hand: '左手',

        },

        {
          userId: 'A123456786',
          operating: '建檔',
          result: '成功',
          dateTime: '2021/01/13 15:02:40',
          hand: '左手',

        },
        {
          userId: 'A123456785',
          operating: '驗證',
          result: '成功',
          dateTime: '2021/01/13 15:02:40',
          hand: '',

        },
        {
          userId: 'A123456784',
          operating: '建檔',
          result: '成功',
          dateTime: '2021/01/13 15:02:40',
          hand: '左手',

        },
        {
          userId: 'A123456783',
          operating: '驗證',
          result: '失敗',
          dateTime: '2021/01/13 15:02:40',
          hand: '',

        },
        {
          userId: 'A123456782',
          operating: '建檔',
          result: '格式錯誤',
          dateTime: '2021/01/13 15:02:40',
          hand: '左手',

        },
        {
          userId: 'A123456781',
          operating: '建檔',
          result: '成功',
          dateTime: '2021/01/13 15:02:40',
          hand: '左手',

        },
        {
          userId: 'A123456780',
          operating: '辨識',
          result: '失敗',
          dateTime: '2021/01/13 15:02:40',
          hand: '',

        },
        {
          userId: 'A123456779',
          operating: '刪除',
          result: '成功',
          dateTime: '2021/01/13 15:02:40',
          hand: '右手',

        },
        {
          userId: 'A123456778',
          operating: '刪除',
          result: '成功',
          dateTime: '2021/01/13 15:02:40',
          hand: '右手',

        },
        {
          userId: 'A123456777',
          operating: '刪除',
          result: '成功',
          dateTime: '2021/01/13 15:02:40',
          hand: '右手',

        },
        {
          userId: 'A123456776',
          operating: '刪除',
          result: '成功',
          dateTime: '2021/01/13 15:02:40',
          hand: '右手',

        },
        {
          userId: 'A123456775',
          operating: '刪除',
          result: '成功',
          dateTime: '2021/01/13 15:02:40',
          hand: '右手',

        },

      ],

      cacheData: {},
    }
  },
  computed: {

  },
  methods: {
    getData() {
      // 撈取所有資料
    },
    searchSubmit() {
      let searchId = this.searchId;
      this.$router.push({ path: `/search/${searchId}` })
      // 查詢後回傳一筆data

    },

  },
  created() {
    this.getData();
  }
};
export default search;