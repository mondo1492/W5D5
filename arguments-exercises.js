function sum(...args) {
  return args.reduce(function(acc, el) {
    return acc + el;
  });
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

function curriedSum (numArgs) {
  const numbers = [];
  return function _curriedSum (num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return sum(...numbers);
    } else {
      return _curriedSum;
    }
  };
}


Function.prototype.curry = function(numArgs) {
  let self = this;
  const numbers = [];
  return function _curry(arg) {
    numbers.push(arg);
    if (numbers.length === numArgs) {
      return self.apply(self, numbers);
    } else {
      return _curry;
    }
  };
};

// why cant we use function after invoking it?

Function.prototype.curry2 = function(numArgs) {
  let self = this;
  const numbers = [];
  return function _curry(arg) {
    numbers.push(arg);
    if (numbers.length === numArgs) {
      return self(...numbers);
    } else {
      return _curry;
    }
  };
};
