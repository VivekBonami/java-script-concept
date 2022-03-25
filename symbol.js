const k1 = Symbol()
const k2 = Symbol()

myobj = {}

myobj[k1] =     "Harry"
myobj[k2] =     "Rohan"

console.log(myobj)
console.log(myobj.k1)
console.log(myobj.k2)

// Every symbol is differnt 
// symbol is used make a unique idenfier if value is same still they won't be equal
// Every time it generate new primitive