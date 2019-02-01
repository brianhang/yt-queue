<template>
  <div id="app">
    <div v-if="err !== ''" class="app-err">{{ err }}</div>
    <VideoInput></VideoInput>
    <VideoQueue v-bind:queue="queue"></VideoQueue>
  </div>
</template>

<script>
import VideoInput from './components/VideoInput.vue';
import VideoQueue from './components/VideoQueue.vue';

export default {
  created() {
    this.sockets.subscribe('vidRequestRes', ({ success, reason }) => {
      this.err = success ? '' : reason;
    });

    this.sockets.subscribe('queueInit', queue => {
      this.queue = queue;
    });

    this.sockets.subscribe('queuePush', video => {
      this.queue.push(video);
    });

    this.sockets.subscribe('queuePop', () => {
      this.queue.pop();
    });

    this.sockets.subscribe('queueRmv', index => {
      this.queue.splice(index, 1);
    });
  },

  data() {
    return {
      err: '',
      queue: [],
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
  margin: 0px;
}

.app-err {
  background-color: #f9675e;
  color: #ffffff;
  border: none;
  outline: none;
  margin-left: auto;
  -moz-box-shadow: 0 0 8px #ccc;
  -webkit-box-shadow: 0 0 8px #ccc;
  box-shadow: 0 0 8px #ccc;
  text-align: center;
  padding: 8px;
}
</style>
