// Return random RGB color string:

function randomColor() {
  var hex = Math.floor(Math.random() * 0x1000000).toString(16);
  return "#" + ("000000" + hex).substr(hex.length);
}

// Poor man's box physics update for time step dt:
function doPhysics(boxes, width, height, dt) {
  for (let i = 0; i < boxes.length; i++) {
    var box = boxes[i];

    // Update positions: 
    box.x += box.dx * dt;
    box.y += box.dy * dt;

    // Handle boundary collisions:
    if (box.x < 0) {
      box.x = 0;
      box.dx = -box.dx;
    } else if (box.x + box.width > width) {
      box.x = width - box.width;
      box.dx = -box.dx;
    }
    if (box.y < 0) {
      box.y = 0;
      box.dy = -box.dy;
    } else if (box.y + box.height > height) {
      box.y = height - box.height;
      box.dy = -box.dy;
    }
  }

  // Handle box collisions:
  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      var box1 = boxes[i];
      var box2 = boxes[j];
      var dx = Math.abs(box1.x - box2.x);
      var dy = Math.abs(box1.y - box2.y);

      // Check for overlap:
      if (2 * dx < (box1.width  + box2.width ) &&
          2 * dy < (box1.height + box2.height)) {

        // Swap dx if moving towards each other: 
        if ((box1.x > box2.x) == (box1.dx < box2.dx)) {
          var swap = box1.dx;
          box1.dx = box2.dx;
          box2.dx = swap;
        }

        // Swap dy if moving towards each other: 
        if ((box1.y > box2.y) == (box1.dy < box2.dy)) {
          var swap = box1.dy;
          box1.dy = box2.dy;
          box2.dy = swap;
        }
      }
    }
  }
}

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Initialize random boxes:
var boxes = [];
var words = ["pee pee","poo poo","ooooooo"]
for (var i = 0; i < words.length; i++) {
  var box = {
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height),
    width: 50, // Will be dynamic
    height: 42,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3
  };
  boxes.push(box);
}


// Initialize random color and set up interval:
var color = randomColor();
setInterval(function() {
  color = randomColor();
}, 450);

// Update physics at fixed rate:
var last = performance.now();
setInterval(function(time) {
  var now = performance.now();
  doPhysics(boxes, canvas.width, canvas.height, now - last);
  last = now;
}, 50);

// Draw animation frames at optimal frame rate:
function draw(now) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < boxes.length; i++) {
    var box = boxes[i];
    
    // Interpolate position:
    var x = box.x + box.dx * (now - last);
    var y = box.y + box.dy * (now - last);
    box.width = context.measureText(words[i]).width; 
    
    context.beginPath();
    context.fillStyle = color;
    context.font = "normal 40px monospace";
    context.textBaseline = "hanging";
    context.fillText(words[i], x, y);
    context.closePath();
  }
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;