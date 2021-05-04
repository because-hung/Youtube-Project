<template>
  <div>
    <div class="header">
      <img src="../assets/img/youtube-logo.png" alt="">
      <div class="topmenu">
        <fa :icon="['fas', 'search']" class="icon" />
        <fa :icon="['fas', 'user']" class="icon" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/_rwd.scss';
$fontBig: 20px;
$fontMid: 16px;
$fontSmall: 12px;
.header {
  background: ghostwhite;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: black 2px solid;
  img {
    width: 200px;
    height: 70px;
  }
  .icon {
    margin-right: 60px;
    width: 50px;
    height: 70px;
  }
  @include ipad() {
    .icon {
      margin-right: 25px;
    }
  }
  @include iphone() {
    .icon {
      margin-top: 20px;
      width: 30px;
      height: 30px;
    }
  }
}
</style>
