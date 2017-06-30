

class Surrogate{
  constructor(){}
}

let inherits = Function.prototype.inherits = function (SuperClass, SubClass) {
  Surrogate.prototype = SuperClass.prototype;
  SubClass.prototype = new Surrogate();
  SubClass.prototype.constructor = SubClass;
};

module.exports(inherits);
// function Surrogate (){}
