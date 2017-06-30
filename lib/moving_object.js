


function MovingObject(optionsHash) {
  this.pos = optionsHash["pos"];
  this.vel = optionsHash["vel"];
  this.radius = optionsHash["radius"];
  this.color = optionsHash["color"];
}

MovingObject.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.closePath();
};

MovingObject.prototype.move = function (pos, vel) {
  this.pos[0] = this.pos[0] + this.vel[0];
  this.pos[1] = this.pos[1] + this.vel[1];
};
