<template>
    <HeroRow
     size="8"
     text-alignment="center"
     margin="y-3"
    >
     <b-p><b>未確認生物</b></b-p>
     <b-div headings="2" class="hero-text">
        未確認生物の種類は数えきれないほど多く、特定の数を挙げることは難しいほどです。
     </b-div>
    </HeroRow>
   
    <Row
     margin="b-3"
     columns="1 md-3"
    >
     <Col>
      <Card relative-height="100" shadow="sm" class="mb-3">
       <CardImgTop
        src="/unsplash/image/480x220/1680552.jpg"
        alt="ビッグフット"
        class="img-fluid"
       />
       <CardBody>
        <b-div margin="b-3">
          <!-- 名前部分 -->
          <div class="card-title">ビッグフット（サスカッチ）</div>
          <!-- 説明部分 -->
          <div class="card-description">北アメリカに伝わる巨大な猿人型の未確認生物。目撃情報が多数あり、実際の存在は確認されていません。</div>
        </b-div>
       </CardBody>
      </Card>
     </Col>
   
     <Col>
      <Card relative-height="100" shadow="sm" class="mb-3">
       <CardImgTop
        src="/unsplash/image/480x220/26103318.jpg"
        alt="チュパカブラ"
        class="img-fluid"
       />
       <CardBody>
        <b-div margin="b-3">
          <!-- 名前部分 -->
          <div class="card-title">チュパカブラ</div>
          <!-- 説明部分 -->
          <div class="card-description">中南米を中心に目撃される血を吸うとされる怪物。家畜が襲われる事件と関連して報告されています。</div>
        </b-div>
       </CardBody>
      </Card>
     </Col>
   
     <Col>
      <Card relative-height="100" shadow="sm" class="mb-3">
       <CardImgTop
        src="/unsplash/image/480x220/1696182.jpg"
        alt="メガロドン"
        class="img-fluid"
       />
       <CardBody>
        <b-div margin="b-3">
          <!-- 名前部分 -->
          <div class="card-title">メガロドン</div>
          <!-- 説明部分 -->
          <div class="card-description">約230万年前に絶滅したとされる巨大なサメ。現在も「生きている」とする説があり、未確認生物として語られることもあります。</div>
        </b-div>
       </CardBody>
      </Card>
     </Col>
    </Row>
   
    <HeroRow size="md-4">
     <!-- 追加コンテンツを配置 -->
    </HeroRow>
</template>

<style scoped>
.img-fluid {
  width: 100%;
  height: auto;
}

.mb-3 {
  margin-bottom: 1rem;
}

.hero-text {
  font-size: 1.8rem !important;
  line-height: 1.7 !important;
  font-weight: 600 !important;
  color: #333 !important;
  text-align: center;
}

.card-title {
  font-size: 1.6rem !important;
  font-weight: 700 !important;
  color: #222 !important;
  margin-bottom: 0.5rem;  /* 名前部分の下に少しスペースを */
}

.card-description {
  font-size: 1.1rem !important;
  line-height: 1.6 !important;
  font-weight: 400 !important;
  color: #555 !important;
}
</style>
