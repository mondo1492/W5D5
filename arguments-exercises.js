function sum(...args) {
  let total = args.reduce(function(acc, el) {
    return acc + el;
  }, 0);
  return total;
}

// Function.prototype.myBind = function(obj, ...args) {
//     return (...moreArgs) => this.apply(obj, args.concat(moreArgs));
//   //"this" is the function that you are binding
//     //set the "this" of the function we're binding to the first argument
// };
Function.prototype.myBind = function() {
    const context = arguments[0];
    const bindArgs = Array.prototype.slice.call(arguments, 1);
    let self = this;
    return function() {
      return self.apply(context, bindArgs.concat(Array.from(arguments)));
    };
  //"this" is the function that you are binding
    //set the "this" of the function we're binding to the first argument
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true
