<template>
  <div class="youtube-card">
    <div class="video">
      <img :src="videoImg" alt="">
      <span class="timecode">{{ time }}</span>
    </div>
    <div class="video-info">
      <img class="ytber-logo" :src="ytberImg" alt="">
      <div class="video-content">
        <h3>{{ title }}</h3>
        <span>{{ info }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: String,
      default: ''
    },
    videoImg: {
      type: String,
      default: ''
    },
    ytberImg: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    info: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/_rwd.scss';
$fontBig: 20px;
$fontMid: 16px;
$fontSmall: 12px;
.youtube-card {
  display: flex;
  flex-direction: column;
  margin-top: 1%;
  width: 24%;
  img {
    width: 95%;
    height: 230px;
  }
  .ytber-logo {
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
    .ytber-logo {
      width: 60px;
      height: 60px;
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
  .timecode {
  position: absolute;
  bottom: 5px;
  right: 20px;
  background: black;
  padding: 3px;
  padding-top: 0px;
  color: white;
  }
}

.video-info {
  display: flex;
  margin-left: 6%;
  margin-top: 3%;
  .video-content {
    margin-left: 3%;
    h3 {
      margin-bottom: 5px;
    }
    span {
      font-size: $fontSmall * 1.2;
      color: gray;
    }
    .video-content {
      display: inline-block;
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
</style>
