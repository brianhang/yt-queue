<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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
