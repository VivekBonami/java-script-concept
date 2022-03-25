import User from "./module";
import { printName } from "./module";
import { printAge } from "./module";


const user = new User('vivek',11)
console.log(user)
console.log(printName(user))
console.log(printAge(user))


