<template>
    <div class="background-container">
      <!-- 背景画像を使うだけで、中身はここに追加できます -->
    </div>
  </template>
  
  <style scoped>
  .background-container {
    position: relative;
    width: 100%;
    height: 80vh; /* ビューポートの80%高さに設定 */
    background-image: url('/unsplash/image/cafe/240_F_728775272_GzGXAhUo1n1dsM3kxIMVybFEkbb0KR8y.jpg');
    background-size: contain; /* 縦横比を保ちながら画像をコンテナ内に収める */
    background-position: center; /* 画像を中央に配置 */
    background-repeat: no-repeat; /* 画像の繰り返しを防ぐ */
    overflow: hidden; /* コンテナを超える部分は隠す */
  }
  </style>
  
  