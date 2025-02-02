<template>
  <div class="background-container">
    <HeroRow class="hero-row">
      <!-- 中央にサイト名を表示 -->
      <div class="text-overlay">
        <h1>未確認生物紹介サイト</h1>
      </div>
    </HeroRow>

    <!-- Typed.js のテキスト（1つだけ配置） -->
    <div class="typed-container">
      <Typed
        class="text-primary fw-semibold typed-text"
        :strings="['このサイトでは', '未だかつて謎の多い', '奇妙な生物を紹介していきます']"
        :type-speed="60"
        :loop="true"
        :back-speed="25"
        :back-delay="1500"
      />
    </div>
  </div>
</template>

<style scoped>
/* 背景画像の設定 */
.background-container {
  position: relative;
  width: 100%;
  height: 100vh; /* ビューポートの高さ */
  background-image: url('/unsplash/image/cafe/2044786.jpg');
  background-size: cover;
  background-position: center;
}

/* ヒーローセクション（サイト名の中央配置） */
.hero-row {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
}

.text-overlay h1 {
  color: rgb(13, 0, 255);
  font-size: 100px;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

/* Typed.js のテキストを最下部に配置 */
.typed-container {
  position: absolute;
  bottom: -300px; /* 画面の最下部ギリギリ */
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
  padding-bottom: 0px; /* 少し余白をつけて調整 */
}

.typed-text {
  font-size: 80px;
  font-weight: bold;
  color: red;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  white-space: nowrap;
}
</style>
