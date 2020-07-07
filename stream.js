const socketIOProvider = require('socket.io');
const cv = require('opencv4nodejs');

const TIME = 1000;
const fps = 30; // 30 frames per second

var counter = 0;
const videoSource = 0;
try {
const videoCap = new cv.VideoCapture(videoSource);

videoCap.set(cv.CAP_PROP_FRAME_WIDTH, 300);
videoCap.set(cv.CAP_PROP_FRAME_HEIGHT, 300);

const stream = (server) => {
    const io = socketIOProvider(server);
    let processingIntervalMultiple = 10;
    setInterval(() => {
        const frame = videoCap.read();
        counter++;
        // Keep reading frames but only send images every second
        if (counter >= fps/15)
        {
          counter = 0;
          const image = cv.imencode('.jpg', frame).toString('base64');
          io.emit('new-frame', { live: image });
       }
    }, TIME / fps);
};
module.exports = stream;
}
catch
{
  console.log("Camera not available.");
}

