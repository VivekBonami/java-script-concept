// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   Person.prototype.getFullName = function () {
//     return this.firstName + ' ' + this.lastName;
//   };
  
//   let p1 = new Person('John', 'Doe');
//   let p2 = new Person('Jane', 'Doe');
  
//   console.log(p1.getFullName());
//   console.log(p2.getFullName());






//   class Person {
// 	constructor(firstName, lastName) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}
// 	getFullName() {
// 		return this.firstName + " " + this.lastName;
// 	}
// }

// let p1 = new Person('John', 'Doe');
// let p2 = new Person('Jane', 'Doe');

// console.log(p1.getFullName());
// console.log(p2.getFullName());





// let person = {};
// person.age = 25;
// person.ssn = '012-38-9119';

// for (let property in person) {
//     console.log(property);
// }



// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     ssn: '299-24-2351'
// };

// for(var prop in person) {
//     console.log(prop + ':' + person[prop]);
// }





// const person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };


// const employee = Object.create(person, {
//     job: {
//         value: 'JS Developer',
//         enumerable: true
//     }
// });

// console.log(employee.firstName)




const person = {
    firstName: 'John',
    lastName: 'December of the value that grow on the value of the value that can be the first vlaue of the values ',
    age: 25
};

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        const value = person[key];
        console.log(value);

    }
}




