<template>
  <div>
    <Header class="header" />

    <div class="categories">
      <ul class="tags">
        <li class="active">
          全部
        </li>
        <li v-for="(item, i) in categories" :key="i">
          <a href="#">
            {{ item }}
          </a>
        </li>
      </ul>
    </div>
    <div class="youtube-content">
      <!--img 1~4 -->
      <div class="youtube-img">
        <div class="video">
          <img src="../assets/img/img1.jpg" alt="">
          <span class="timecode">2:34</span>
        </div>

        <div class="video-information">
          <img class="yt-logo" src="../assets/img/smallimg1.jpg" alt="">
          <div class="content">
            <h3>初心者必練廚佛系刀法Knife Skills in FRE-Style｜Fred吃上癮</h3>
            <span>Fred吃上癮，觀看次數：254,421次，2018年7月11日</span>
          </div>
        </div>
      </div>

      <div class="youtube-img">
        <div class="video">
          <img src="../assets/img/img2.jpg" alt="">
          <span class="timecode">15:44</span>
        </div>
        <div class="video-information">
          <img class="yt-logo" src="../assets/img/smallimg1.jpg" alt="">
          <div class="content">
            <h3>廚佛Fred自稱是料理界的天才?</h3>
            <span>Fred吃上癮，觀看次數：358,411次，2019年3月21日</span>
          </div>
        </div>
      </div>

      <div class="youtube-img">
        <div class="video">
          <img src="../assets/img/img3.jpg" alt="">
          <span class="timecode">20:11</span>
        </div>
        <div class="video-information">
          <img class="yt-logo" src="../assets/img/smallimg1.jpg" alt="">
          <div class="content">
            <h3>Fred小當家，到你家主菜去 ft.網紅娜娜</h3>
            <span>Fred吃上癮，觀看次數：306,578次，2021年3月31日</span>
          </div>
        </div>
      </div>

      <div class="youtube-img">
        <div class="video">
          <img src="../assets/img/img4.jpg" alt="">
          <span class="timecode">5:34</span>
        </div>
        <div class="video-information">
          <img class="yt-logo" src="../assets/img/smallimg1.jpg" alt="">
          <div class="content">
            <h3>廚佛快問快答，驚爆小時候做的怪事！</h3>
            <span>Fred吃上癮，觀看次數：58,471次，2020年4月7日</span>
          </div>
        </div>
      </div>

      <!--img 5~8-->

      <div class="youtube-img">
        <div class="video">
          <img src="../assets/img/img5.jpg" alt="">
          <span class="timecode">2:34</span>
        </div>
        <div class="video-information">
          <img class="yt-logo" src="../assets/img/smallimg2.jpg" alt="">
          <div class="content">
            <h3>How哥與知名歌星鄧福如結為夫妻，網友直呼：叛徒！！！</h3>
            <span>HowFun，觀看次數：1314,578次，2020年5月20日</span>
          </div>
        </div>
      </div>

      <div class="youtube-img">
        <div class="video">
          <img src="../assets/img/img6.jpg" alt="">
          <span class="timecode">12:05</span>
        </div>
        <div class="video-information">
          <img class="yt-logo" src="../assets/img/smallimg2.jpg" alt="">
          <div class="content">
            <h3>How哥前往母校竹中考學測英文，出來的成績居然是？</h3>
            <span>HowFun，觀看次數：306,578次，2019年2月7日</span>
          </div>
        </div>
      </div>

      <div class="youtube-img">
        <div class="video">
          <img src="../assets/img/img7.jpg" alt="">
          <span class="timecode">5:42</span>
        </div>
        <div class="video-information">
          <img class="yt-logo" src="../assets/img/smallimg2.jpg" alt="">
          <div class="content">
            <h3>業配之王網紅HowHow，月收入大公開！</h3>
            <span>HowFun，觀看次數：1306,677次，2020年7月31日</span>
          </div>
        </div>
      </div>

      <div class="youtube-img">
        <div class="video">
          <img src="../assets/img/img8.jpg" alt="">
          <span class="timecode">14:43</span>
        </div>
        <div class="video-information">
          <img class="yt-logo" src="../assets/img/smallimg2.jpg" alt="">
          <div class="content">
            <h3>How哥與阿明的雙聲道</h3>
            <span>HowFun，觀看次數：214,578次，2021年2月28日</span>
          </div>
        </div>
      </div>

      <!--img 9~12-->

      <div class="youtube-img">
        <div class="video">
          <img src="../assets/img/img9.jpg" alt="">
          <span class="timecode">12:00</span>
        </div>
        <div class="video-information">
          <img class="yt-logo" src="../assets/img/smallimg3.png" alt="">
          <div class="content">
            <h3>海賊王第1011話大媽的陰謀？</h3>
            <span>海賊王解說員，觀看次數：4,578次，2021年4月28日</span>
          </div>
        </div>
      </div>

      <div class="youtube-img">
        <div class="video">
          <img src="../assets/img/img10.jpg" alt="">
          <span class="timecode">7:33</span>
        </div>
        <div class="video-information">
          <img class="yt-logo" src="../assets/img/smallimg3.png" alt="">
          <div class="content">
            <h3>你們發現了嗎？小菊不為人知的祕密</h3>
            <span>海賊王解說員，觀看次數：324,578次，2020年2月13日</span>
          </div>
        </div>
      </div>

      <div class="youtube-img">
        <div class="video">
          <img src="../assets/img/img11.jpg" alt="">
          <span class="timecode">15:22</span>
        </div>
        <div class="video-information">
          <img class="yt-logo" src="../assets/img/smallimg3.png" alt="">
          <div class="content">
            <h3>第1007話御田所埋下的伏筆</h3>
            <span>海賊王解說員，觀看次數：174,578次，2021年11月8日</span>
          </div>
        </div>
      </div>

      <div class="youtube-img">
        <div class="video">
          <img src="../assets/img/img12.jpg" alt="">
          <span class="timecode">15:33</span>
        </div>
        <div class="video-information">
          <img class="yt-logo" src="../assets/img/smallimg3.png" alt="">
          <div class="content">
            <h3>什麼?四皇的絕技遭到魯夫四檔擊破</h3>
            <span>海賊王解說員，觀看次數：54,578次，2019年9月10日</span>
          </div>
        </div>
      </div>
      <!---->
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components: {
    Header,
    Footer
  },
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
          title: '什麼?四皇的絕技遭到魯夫四檔擊破',
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
        'UberEat'
      ]
    }
  }
}
</script>

<style lang="scss">
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
  @include ipad() {
    overflow-x: auto;
  }
}
.tags {
  margin-top: 10px;
  display: flex;
  padding-left:20px;
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
    }
  }
  .active {
    background: gray;
    opacity: 1.2;
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
.youtube-img {
  display: flex;
  flex-direction: column;
  margin-top: 1%;
  width: 24%;
  img {
    width: 95%;
    height: 230px;
  }
  .yt-logo {
    width: 80px;
    border-radius: 50%;
    height: 80px;
  }

  @include ipad() {
    width: 48%;
    margin-bottom: 10px;
  }
  @include iphone() {
    width: 98%;
    margin-bottom: 10px;
    .yt-logo {
      width: 60px;
      height: 60px;
    }
  }
}

.video-information {
  display: flex;
  margin-left: 6%;
  margin-top: 3%;
  .content {
    margin-left: 3%;
    h3 {
      margin-bottom: 5px;
    }
    span {
      font-size: $fontSmall * 1.2;
      color: gray;
    }
    @include iphone() {
      h3 {
        font-size: $fontMid;
      }
      span {
        font-size: $fontSmall;
      }
    }
  }
}
.video {
  width: 100%;
  position: relative;
  display: flex;
  img {
    margin: auto;
  }
}
.timecode {
  position: absolute;
  bottom: 5px;
  right: 20px;
  background: black;
  padding: 3px;
  padding-top: 0px;
  color: white;
}

.content {
  display: inline-block;
}
</style>
