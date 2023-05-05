"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var juan = new Person_1.Person("juan", 26, "calle santo angel 48");
console.log(juan.yearOfBirth(2023));
console.log(juan.getAddres());
console.log(juan.printName());
console.log(juan.setAddress(""));
