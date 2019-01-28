<template>
  <div id="video-queue">
    <h1>Queue</h1>
    <VideoItem
      v-for="video in queue"
      v-bind:video="video"
      :key="video.id"
    />
    <p v-if="queue.length === 0">
      There are currently no videos queued up.
    </p>
  </div>
</template>

<script>
import VideoItem from './VideoItem.vue';

export default {
  name: 'VideoQueue',
  props: ['queue'],
  components: { VideoItem },
};
</script>

<style scoped>
#video-queue {
  margin: 40px auto;
  padding: 16px;
  background-color: #fefefe;
  max-width: 640px;
  -moz-box-shadow: 0 0 12px #ccc;
  -webkit-box-shadow: 0 0 12px #ccc;
  box-shadow: 0 0 12px #ccc;
}

h1 {
  padding: 0px;
  margin: 0px 0px 8px;
}

p {
  margin-bottom: 0px;
}
</style>
