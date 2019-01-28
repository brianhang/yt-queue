<template>
  <div id="video-input">
    <h1>Enter a YouTube URL:</h1>
    <input
      v-model="url"
      type="url"
      name="vid-url"
      id="vid-url"
      placeholder="https://www.youtube.com/watch?v=oHg5SJYRHA0"
      autofocus
      @keyup.enter="onEnter"
    />
  </div>
</template>

<script>
export default {
  name: 'VideoInput',
  data() {
    return {
      url: '',
    };
  },
  methods: {
    onEnter() {
      console.log(this.url);
      this.$socket.emit('vid-request', this.url);

      this.url = '';
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#video-input {
  margin: 40px auto;
  padding: 16px;
  background-color: #fefefe;
  max-width: 640px;
  -moz-box-shadow: 0 0 12px #ccc;
  -webkit-box-shadow: 0 0 12px #ccc;
  box-shadow: 0 0 12px #ccc;
}

#vid-url {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  -moz-box-shadow: 0 0 4px #ccc;
  -webkit-box-shadow: 0 0 4px #ccc;
  box-shadow: 0 0 4px #ccc;
  background-color: #ffffff;
  outline: none;
  font-size: 1.2em;
  border: none;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
}

#vid-url::placeholder {
  color: #a0a0a0;
}

h1 {
  padding: 0px;
  margin: 0px 0px 8px;
}
</style>
