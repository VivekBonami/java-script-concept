// Implementation

let person = {
    firstname : "Vivek",
    lastname : "Kumar"
}

person.greet = function(){
    console.log("Good Morning")
    return 5
}

console.log(person)

console.log(person.greet())



let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet() {
        console.log('Hello, World!');
    }
};

person.greet();
console.log(person.greet)