<template>
  <div id="app">
    <VideoInput></VideoInput>
    <VideoQueue v-bind:queue="queue"></VideoQueue>
  </div>
</template>

<script>
import VideoInput from './components/VideoInput.vue';
import VideoQueue from './components/VideoQueue.vue';

export default {
  data() {
    return {
      queue: [{ name: 'Rick Roll', id: 'oHg5SJYRHA0' }, { name: 'Africa', id: 'FTQbiNvZqaY' }, { name: 'A-ha', id: 'j3tszcxA8jQ' }],
    }
  },
  name: 'app',
  components: {
    VideoInput,
    VideoQueue
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

body {
  background-color: #f3f3f3;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
