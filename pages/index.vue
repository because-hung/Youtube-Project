<template>
  <div>
    <Header class="header" />

    <div class="categories">
      <ul class="tags">
        <li class="active">
          <a href="" aria-disabled="true">
            全部
          </a>
        </li>
        <li v-for="(item, i) in categories" :key="i">
          <a href="#">
            {{ item }}
          </a>
        </li>
      </ul>
    </div>
    <div class="youtube-content">
      <Card
        v-for="(item, i) in products"
        :key="i"
        :time="item.time"
        :video-img="item.videoImg"
        :ytber-img="item.ytberImg"
        :title="item.title"
        :info="item.info"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          time: '2:34',
          videoImg: require('../assets/img/img1.jpg'),
          ytberImg: require('../assets/img/smallimg1.jpg'),
          title: '初心者必練廚佛系刀法Knife Skills in FRE-Style｜Fred吃上癮',
          info: 'Fred吃上癮，觀看次數：254,421次，2018年7月11日'
        },
        {
          time: '15:44',
          videoImg: require('../assets/img/img2.jpg'),
          ytberImg: require('../assets/img/smallimg1.jpg'),
          title: '廚佛Fred自稱是料理界的天才?',
          info: 'Fred吃上癮，觀看次數：358,411次，2019年3月21日'
        },
        {
          time: '20:11',
          videoImg: require('../assets/img/img3.jpg'),
          ytberImg: require('../assets/img/smallimg1.jpg'),
          title: 'Fred小當家，到你家主菜去 ft.網紅娜娜',
          info: 'Fred吃上癮，觀看次數：306,578次，2021年3月31日'
        },
        {
          time: '5:34',
          videoImg: require('../assets/img/img4.jpg'),
          ytberImg: require('../assets/img/smallimg1.jpg'),
          title: '廚佛快問快答，驚爆小時候做的怪事！',
          info: 'Fred吃上癮，觀看次數：58,471次，2020年4月7日'
        },
        {
          time: '2:34',
          videoImg: require('../assets/img/img5.jpg'),
          ytberImg: require('../assets/img/smallimg2.jpg'),
          title: 'How哥與知名歌星鄧福如結為夫妻，網友直呼：叛徒！！！',
          info: 'HowFun，觀看次數：1314,578次，2020年5月20日'
        },
        {
          time: '12:05',
          videoImg: require('../assets/img/img6.jpg'),
          ytberImg: require('../assets/img/smallimg2.jpg'),
          title: 'How哥前往母校竹中考學測英文，出來的成績居然是？',
          info: 'HowFun，觀看次數：306,578次，2019年2月7日'
        },
        {
          time: '5:42',
          videoImg: require('../assets/img/img7.jpg'),
          ytberImg: require('../assets/img/smallimg2.jpg'),
          title: '業配之王網紅HowHow，月收入大公開！',
          info: 'HowFun，觀看次數：1306,677次，2020年7月31日'
        },
        {
          time: '14:43',
          videoImg: require('../assets/img/img8.jpg'),
          ytberImg: require('../assets/img/smallimg2.jpg'),
          title: 'How哥與阿明的雙聲道',
          info: 'HowFun，觀看次數：214,578次，2021年2月28日'
        },
        {
          time: '12:00',
          videoImg: require('../assets/img/img9.jpg'),
          ytberImg: require('../assets/img/smallimg3.png'),
          title: '海賊王第1011話大媽的陰謀？',
          info: '海賊王解說員，觀看次數：4,578次，2021年4月28日'
        },
        {
          time: '7:33',
          videoImg: require('../assets/img/img10.jpg'),
          ytberImg: require('../assets/img/smallimg3.png'),
          title: '你們發現了嗎？小菊不為人知的祕密',
          info: '海賊王解說員，觀看次數：324,578次，2020年2月13日'
        },
        {
          time: '15:22',
          videoImg: require('../assets/img/img11.jpg'),
          ytberImg: require('../assets/img/smallimg3.png'),
          title: '第1007話御田所埋下的伏筆',
          info: '海賊王解說員，觀看次數：174,578次，2021年11月8日'
        },
        {
          time: '15:33',
          videoImg: require('../assets/img/img12.jpg'),
          ytberImg: require('../assets/img/smallimg3.png'),
          title: '什麼？四皇的絕技遭到魯夫四檔擊破',
          info: '海賊王解說員，觀看次數：54,578次，2019年9月10日'
        }
      ],
      categories: [
        '音樂',
        '娛樂',
        '電玩',
        '好笑',
        '時事',
        '新聞',
        '防疫',
        '寵物',
        '美食',
        '旅遊',
        '台南',
        '演唱會',
        '程式',
        '網紅',
        '健身'
      ]
    }
  }
}
</script>

<style lang="scss">
//引出 rwd 螢幕解析度
@import '@/assets/_rwd.scss';
$fontBig: 20px;
$fontMid: 16px;
$fontSmall: 12px;
.header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
}
.categories {
  //類別 跑出X軸 可向右滑
  @include padpro() {
    overflow-x: auto;
    margin-right: 10px;
  }
}
.tags {
  margin-top: 15px;
  display: flex;
  padding-left:20px;
   @include ipad() {
    margin-bottom: 15px;
     }
  li {
    list-style-type: none;
    text-align: center;
    background: lightgrey;
    line-height: 50px;
    border-radius: 50%;
    width: 100%;
    word-break: keep-all;
    margin-right: 15px;
    font-size: $fontBig;
    font-weight: 700;
    opacity: 0.7;
    a {
      color: black;
      text-decoration: none;
      display: block;
    }
    @include ipad() {
       padding: 5px;
       a {
       padding: 5px;
       }
     }
  }
  //'全部'按鈕 顯示已使用狀態
  .active {
    background: gray;
    opacity: 1.2;
    // 取消 preventdefault 讓它不可點擊
    a {
      pointer-events: none;
      cursor: default;
    }
  }
  li:hover {
    background: gray;
  }
}
.youtube-content {
  margin-bottom: 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
