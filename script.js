var context, controller, rectangle, loop;

context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 180;
context.canvas.width = 320;

rectangle = {
  height: 32,
  jumping: true,
  width: 32,
  x: 144, // center of the canvas
  x_velocity: 0,
  y: 0,
  y_velocity: 0,
};

controller = {
  left: false,
  right: false,
  up: false,
  keyListener: function (event) {
    var key_state = event.type == "keydown" ? true : false;

    switch (event.keyCode) {
      case 37: // left key
        controller.left = key_state;
        break;
      case 38: // up key
        controller.up = key_state;
        break;
      case 39: // right key
        controller.right = key_state;
        break;
    }
  },
};

loop = function () {
  if (controller.up && rectangle.jumping == false) {
    rectangle.y_velocity -= 20;
    rectangle.jumping = true;
  }

  if (controller.left) {
    rectangle.x_velocity -= 0.5;
  }

  if (controller.right) {
    rectangle.x_velocity += 0.5;
  }
};

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
