const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

const DEFAULTS = {
  COLOR: "",
  RADIUS: Math.floor(Math.random() * 51) + 50,
  SPEED: 4
};


function Asteroid(ops = {}) {
  MovingObject.call(this,
    {pos: ops["pos"],
    color: DEFAULTS.COLOR,
    radius: DEFAULTS.RADIUS,
    vel: randomVec(DEFAULTS.SPEED)});
}

Util.inherits(Asteroid, MovingObject);

function randomVec(length){
  const deg = 2 * Math.PI * Math.random();
  return Util.scale([Math.sin(deg), Math.cos(deg)], length);
}
