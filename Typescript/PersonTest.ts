import { Person } from "./Person";

let juan : Person = new Person("juan" , 26 , "calle santo angel 48")

console.log(juan.yearOfBirth(2023));
juan.setAddress("Madrid");
console.log(juan.getAddres());
juan.printName()
