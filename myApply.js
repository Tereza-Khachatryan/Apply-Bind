const person = {
    name: "Mila",
  }
  
  function myApply(fn, context, args) {
    return fn.call(context, ...args)
  }
  
  function sayBye(txt) {
    return txt + " " + this.name
  }
  
  const res = myApply(sayBye, person, ["Bye"])
  
  console.log(res)
  