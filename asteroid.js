const inherits = require("./inheritance.js");
const MovingObject = require("./moving-object.js");

function Asteroid () {}
Asteroid.inherits(MovingObject);
module.exports = Asteroid;
