<script setup lang="ts">
definePageMeta({
  title: 'About 図鑑',
  description: 'Quickly get a project started with any of our examples ranging from using parts of the framework to custom components and layouts.'
})
</script>

<template>
  <Background video-src="/pexels/movie/3209211-uhd_3840_2160_25fps.mp4" :overlay="true" overlay-color="gray-100">
    <b-h level="1" margin="5" display-headings="1" text-color="white">
      <b-p text-color="blue">ようこそ!ここでは様々な生物を説明していくよー！！</b-p>
      <Typed class="text-primary fw-semibold" :strings="['様々な生物', '説明', 'feature-packed.']"
        :type-speed="100" :loop="true" :back-speed="250" :back-delay="100" />
    </b-h>
  </Background>
  <h2>楽しい</h2>
  <h2>楽しくない</h2>

</template>