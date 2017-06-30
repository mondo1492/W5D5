const inherits = require("./inheritance.js");
const MovingObject = require("./moving-object.js");

function Ship() {}

Ship.inherits(MovingObject);
module.exports = Ship;
