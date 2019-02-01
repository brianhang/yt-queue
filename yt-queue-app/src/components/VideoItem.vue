<template>
  <div
    @mouseover="active = true"
    @mouseleave="active = false"
    v-bind:class="{['video-item']: true, ['video-item-hovered']: active}">
    <img
      class="video-thumb"
      :src="video.thumbnail"
    />
    <span class="video-name">{{ video.title }}</span>

    <button class="video-skip-btn" v-show="active" v-on:click="onClick">SKIP</button>
  </div>
</template>

<script>
export default {
  name: 'VideoItem',
  props: ['video'],

  data() {
    return {
      active: false,
    };
  },

  methods: {
    onClick() {
      this.$socket.emit('vid-skip', this.$vnode.key);
    },
  },
}
</script>

<style>
.video-item {
  background-color: #fefefe;
  display: flex;
  margin: 8px 0px 0px 0px;
}

.video-item-hovered {
  background-color: #f8f8f8;
}


.video-name {
  margin: 0px 0px 0px 4px;
  line-height: 32px;
}

.video-thumb {
  width: 32px;
  height: 32px;
  -moz-box-shadow: 0 0 4px #ccc;
  -webkit-box-shadow: 0 0 4px #ccc;
  box-shadow: 0 0 4px #ccc;
}

.video-skip-btn {
  background-color: #f9675e;
  color: #ffffff;
  border: none;
  outline: none;
  margin-left: auto;
  -moz-box-shadow: 0 0 4px #ccc;
  -webkit-box-shadow: 0 0 4px #ccc;
  box-shadow: 0 0 4px #ccc;
  cursor: pointer;
}
</style>