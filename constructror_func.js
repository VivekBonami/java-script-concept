function Person(fname,lname){
    this.firstname = fname
    this.lastname  = lname
}

let P1 = new Person('vivek','kumar')
console.log(P1.firstname)
console.log(P1.lastname)