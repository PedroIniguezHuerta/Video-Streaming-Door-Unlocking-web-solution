const socket = io.connect('http://localhost:3000');
const liveStream = document.querySelector('img[name=live-stream]');
socket.on('new-frame', (stream) => {
      alert("Hello world");
      liveStream.src = `data:image/jpeg;base64,${stream.live}`;
 });

