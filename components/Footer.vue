<template>
  <div>
    <div class="footer">
      <ul>
        <li>
          <a href="">
            <fa :icon="['fas', 'home']" class="footer-icon" />
            <span>首頁</span>
          </a>
        </li>
        <li>
          <a href="">
            <fa :icon="['fas', 'heart']" class="footer-icon" />
            <span>最愛</span>
          </a>
        </li>
        <li>
          <a href="">
            <fa :icon="['fas', 'bell']" class="footer-icon" />
            <span>通知</span>
          </a>
        </li>
        <li>
          <a href="">
            <fa :icon="['fas', 'play-circle']" class="footer-icon" />
            <span>訂閱</span>
          </a>
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
    a {
      color: black;
      text-decoration: none;
    }
    li {
      padding: 5px;
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
