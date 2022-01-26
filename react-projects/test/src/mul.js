function curry(func, arity = func.length) {
    console.log(func, arity)
    return function (...args) {
        console.log(args, arity)
      if (args.length >= arity) {
        return func(...args);
      } else {
        return curry(func.bind(this, ...args), arity - args.length);
      }
    };
  }
  
  const multiply = curry((a, b, c) => a * b * c);


  console.log(multiply(2,3)(4))
  



