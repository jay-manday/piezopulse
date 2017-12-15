import p5 from 'p5';
import 'p5/lib/addons/p5.dom';
import 'p5/lib/addons/p5.sound';
import io from 'socket.io-client';

const sketch = (p) => {
  // make library globally available
  window.p5 = p5;
  // Keep track of socket connection
  //const socket;

  p5.setup = () => {
    createCanvas(p5.windowWidth, p5.windowHeight);
    background(0);
    // Start a socket connection to the server
    // Some day we would run this server somewhere else
    let socket = io.connect('http://localhost:4000');
    // We make a named event called 'mouse' and write an
    // anonymous callback function
  }

  p5.draw = () => {
    socket.on('piezo',
      // When we receive data
      function(data) {
        // Draw a blue circle
        fill(0,0,255);
        noStroke();
        ellipse(width/2,height/2, piezo, piezo);
      }
    );
  }
}

export default sketch;
