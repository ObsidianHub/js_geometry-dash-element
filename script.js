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
