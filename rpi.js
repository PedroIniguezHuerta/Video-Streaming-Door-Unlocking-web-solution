const RING_BUTTON = 11;
const UNLOCK_PIN = 7;
var gpiop = require('rpi-gpio').promise;
var int = setInterval(io_read, 1000);

function io_read()
{
  gpiop.read(RING_BUTTON).then((value) => {
      console.log("PIN ", UNLOCK_PIN, ":", value);
  });
}

gpiop.setup(RING_BUTTON, gpiop.DIR_IN)
    .then(() => {
        console.log("PIN", RING_BUTTON, "configured as input");
    })
    .catch((err) => {
        console.log('Error: ', err.toString())
    });

 
gpiop.setup(UNLOCK_PIN, gpiop.DIR_OUT)
    .then(() => {
        console.log("Locking Door");
        return gpiop.write(UNLOCK_PIN, false);
    })
    .catch((err) => {
        console.log('Error: ', err.toString())
    });

// lock door
exports.lockDoor = function(body) {
  console.log("Locking Door");
  gpiop.write(UNLOCK_PIN, false);
};

// unlock door
exports.unlockDoor = function(body) {
  console.log("unlocking Door");
  gpiop.write(UNLOCK_PIN, true);
};

