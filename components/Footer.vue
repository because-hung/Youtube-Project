<template>
  <div>
    <div class="footer">
      <ul>
        <li>
          <fa :icon="['fas', 'search']" class="footer-icon" />
          <span>首頁</span>
        </li>
        <li>
          <fa :icon="['fas', 'heart']" class="footer-icon" />
          <span>我的最愛</span>
        </li>
        <li>
          <fa :icon="['fas', 'bell']" class="footer-icon" />
          <span>通知</span>
        </li>
        <li>
          <fa :icon="['fas', 'play-circle']" class="footer-icon" />
          <span>訂閱內容</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/_rwd.scss';
$fontBig: 20px;
$fontMid: 16px;
$fontSmall: 12px;
.footer {
  background: ghostwhite;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  ul {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    li {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .footer-icon {
      width: 30px;
      height: 30px;
    }
    span {
      display: block;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  @include iphone() {
    ul {
      padding-left: 10px;
      padding-right: 10px;
      justify-content: space-around;
    }
  }
}
</style>
