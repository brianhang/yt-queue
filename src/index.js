const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

const STATIC_DIST = path.join(__dirname, '../yt-queue-app/dist');
app.use(express.static(STATIC_DIST));

const server = app.listen(PORT, () => {
  console.log(`Server started on ${PORT}.`)
});

const io = require('socket.io')(server);
io.set('origins', '*:*');

let videoQueue = [];

async function getVideoInfo(url) {
  const API_URL = 'https://youtube.com/oembed/?format=json&url=';
  const unparsedData = await fetch(`${API_URL}${url}`);
  const data = await unparsedData.json();

  if (!data.title) {
    throw 'Invalid YouTube URL given!';
  }

  return data;
}

async function handleVidRequest(url) {
  console.log(`handleVidRequest(${url})`);
  try {
    url = url.trim();

    const data = await getVideoInfo(url);
    const video = {
      title: data.title,
      author: data.author_name,
      url: url,
    };

    videoQueue.push(video);
    console.log(videoQueue);
  } catch (ex) {
    console.error(ex.toString());
  }
}

async function handleSkipRequest(id) {

}

io.on('connection', socket => {
  console.log(`${socket.id} has connected`);
  socket.on('vid-request', handleVidRequest);
  socket.on('vid-skip', handleSkipRequest);
});
