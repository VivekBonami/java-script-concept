// class Person{
//     constructor(firstName){
//         this.fname = firstName
//     }
//     getName(){
//         return this.fname
//     }
//     setName(newName){
//         newName = newName.trim()
//         if (newName == ''){
//             throw "The Name cannot be empty"
//         }
//         this.fname = newName
//     }
// }

// let P = new Person('vivek')
// console.log(P.fname)
// console.log(P.getName())
// P.setName('Aakash')
// console.log(P.getName())




// class Animal{
//     constructor(legs){
//         this.legs = legs
//     }
//     walk() {
//         console.log('walking on'+this.legs+'legs')
//     }
// }


// class Bird extends Animal{
//     constructor(legs){
//         super(legs)
//     }
//     fly(){
//         console.log('flying')
//     }
// }


// let bird = new Bird(4)
// console.log(bird.legs)
// bird.fly()



// function add(x, y) {
//     return x + y;
//   }
  
//   let result = add.call(this, 10, 20);
//   console.log(result); // 30



// Simple Java script Apply method

// const Person = {
//     firstName : "Vivek",
//     lastName : "Kumar"
// } 


// const greet = (greeting,message) => {
//     return `${greeting} , ${this.firstName} ${message}`
// }


// let result = greet.apply(Person,['Hello','How are you'])
// console.log(result)




class Circle {
    #radius;
    constructor(value) {
      this.#radius = value;
    }
    get area() {
      return Math.PI * Math.pow(this.#radius, 2);
    }
  }


  let obj = new Circle(1)
  console.log(obj)
  console.log(obj.area)