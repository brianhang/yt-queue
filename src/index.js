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
let curVideo;

async function getVideoInfo(url) {
  const API_URL = 'https://youtube.com/oembed/?format=json&url=';
  const unparsedData = await fetch(`${API_URL}${url}`);
  const data = await unparsedData.json();

  if (!data.title) {
    throw 'Invalid YouTube URL given!';
  }

  return data;
}

function getVideoIdFromYouTubeUrl(url) {
  const ID_PATTERN = /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/;
  const id = url.match(ID_PATTERN);
  return id ? id[1] : null;
}

function playVideoFromQueue() {
  if (videoQueue.length === 0) {
    return;
  }

  const video = videoQueue[0];
  const id = getVideoIdFromYouTubeUrl(video.url);

  if (id) {
    curVideo = video;
    io.sockets.emit('vid-play', id);
  }
}

function syncVideoQueue(socket) {
  socket.emit('queueInit', videoQueue);
}

function addVideoToQueue(video) {
  videoQueue.push(video);
  io.sockets.emit('queuePush', video);

  onVideoAddedToQueue(video);
}

function popVideoFromQueue() {
  io.sockets.emit('queuePop');
  return videoQueue.shift();
}

function removeVideoFromQueue(index) {
  if (index >= 0 && index < videoQueue.length) {
    videoQueue.splice(index, 1);
    io.sockets.emit('queueRmv', index);
  }
}

function onVideoAddedToQueue(video) {
  if (videoQueue.length === 1) {
    playVideoFromQueue();
  }
}

function onVideoFinished(video) {
  popVideoFromQueue();
  playVideoFromQueue();

  if (videoQueue.length === 0) {
    io.sockets.emit('vid-stop');
  }
}

async function handleVidRequest(url) {
  let success = true;
  let reason = '';

  try {
    url = url.trim();

    const data = await getVideoInfo(url);
    const video = {
      title: data.title,
      author: data.author_name,
      url: url,
      thumbnail: data.thumbnail_url,
    };

    addVideoToQueue(video);
  } catch (ex) {
    console.error(`handleVidRequest(${url}) errored: ${ex.toString()}`);
    success = false;
    reason = 'You have provided an invalid YouTube URL.';
  }

  this.emit('vidRequestRes', { success, reason });
}

async function handleSkipRequest(index) {
  onVideoFinished(curVideo);
}

function handleVidFinish() {
  if (curVideo) {
    onVideoFinished(curVideo);
  }
}

io.on('connection', socket => {
  console.log(`${socket.id} has connected`);
  socket.on('vid-request', handleVidRequest);
  socket.on('vid-skip', handleSkipRequest);
  socket.on('vid-finish', handleVidFinish);

  syncVideoQueue(socket);
});
