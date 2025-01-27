<template>
    <div class="background-container">
      <HeroRow class="hero-row">
        <!-- 中央に名前を表示 -->
        <div class="text-overlay">
          <h1>未確認生物紹介サイト</h1>
        </div>
      </HeroRow>
    </div>
  
    <HeroRow>
      <b-h level="1" display-headings="3" margin="b-5">
      </b-h>
      <!-- ここで Typed コンポーネントを配置 -->
      <Typed
        class="text-primary fw-semibold typed-text"
        :strings="['このサイトでは', '未だかつて謎の多い', '奇妙な生物を紹介していきます']"
        :type-speed="60"
        :loop="true"
        :back-speed="25"
        :back-delay="1500"
      />
    </HeroRow>
  
    <HeroRow size="md-10" justify-content="start">
      <!-- 追加のコンテンツなど -->
    </HeroRow>
  </template>
  
  <style scoped>
  /* 背景画像の設定と中央配置 */
  .background-container {
    position: relative;
    width: 100%;
    height: 100vh; /* ビューポートの高さ */
    background-image: url('/unsplash/image/cafe/240_F_728775272_GzGXAhUo1n1dsM3kxIMVybFEkbb0KR8y.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .hero-row {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; /* 画像上で中央に配置 */
    position: absolute; /* 親要素を基準に配置 */
    width: 100%;
  }
  
  .text-overlay h1 {
    color: white; /* テキストを白色に */
    font-size: 48px; /* テキストサイズを調整 */
    font-weight: bold;
    text-align: center; /* テキスト中央揃え */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); /* 文字に影をつけて見やすく */
  }
  </style>
  