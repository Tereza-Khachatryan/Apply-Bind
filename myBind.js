const person = {
    name: "Alice",
    age: 20,
  }
  
  function myBind(fn, context, ...boundArg) {
    return function (...args) {
      return fn.apply(context, [...boundArg, ...args])
    }
  }
  
  function sayHi(txt) {
    return txt + " " + this.name
  }
  
  const result = myBind(sayHi, person, "Hello")
  
  console.log(result())