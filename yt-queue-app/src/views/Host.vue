<template>
  <div id="host">
    <div v-if="!playing" id="cover">
      <h1>192.168.1.69</h1>
    </div>
    <div id="player"></div>
  </div>
</template>

<script>
export default {
  name: 'home',

  data() {
    return {
      playing: false,
    };
  },

  created() {
    let videoId;

    this.sockets.subscribe('vid-play', id => {
      videoId = id;

      if (player) {
        player.loadVideoById(videoId);
      }

      this.playing = true;
    });

    this.sockets.subscribe('vid-stop', () => {
      this.playing = false;

      if (player) {
        player.stopVideo();
      }
    });

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    const script = document.getElementsByTagName('script')[0];
    script.parentNode.insertBefore(tag, script);

    let player;

    window.onYouTubeIframeAPIReady = () => {
      player = new YT.Player('player', {
        width: '100%',
        height: '100%',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange,
        },
        playerVars: { 
          autoplay: 0,
          controls: 0,
          rel: 0,
          fs: 0,
          showinfo: 0,
        },
      });
    }

    function onPlayerReady({ target }) {
      if (videoId !== '') {
        target.loadVideoById(videoId);
      }
    }

    const socket = this.$socket;

    function onPlayerStateChange({ data }) {
      if (data === 0) {
        console.log('DONE');
        socket.emit('vid-finish');
      }
    }
  },
}
</script>

<style>
#host {
  position: absolute;
  background-color: #000000;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

#cover {
  display: flex;
  align-items: center;
  color: #ffffff;
  position: fixed;
  background-color: #000000;
  width: 100%;
  height: 100%;
  z-index: 500;
  justify-content: center;
}
</style>