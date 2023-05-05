import { Person } from "./Person"

let juan : Person = new Person("juan" , 26 , "calle santo angel 48")

console.log(juan.yearOfBirth(2023));
console.log(juan.getAddres());
console.log(juan.printName());
console.log(juan.setAddress("calle Santa ana"))