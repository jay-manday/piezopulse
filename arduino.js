const io = require('socket.io-client');
const five = require('johnny-five');
const config = require('./config');

// Connect to the socket server
const socket = io.connect(config.url);
const board = five.Board();

let piezo = 0;

board.on("ready", function() {
  let sensor = new five.Sensor("A1");
  console.log('Arduino connected');
  sensor.on("change", function(value) {
    piezo = value;
    console.log("reading: " + piezo);
  });
});
