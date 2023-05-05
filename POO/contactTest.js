
let myPersona = require("./Person");
let myContact = require("./contacts");

let clubDeGolf  = new myContact.Contacts() 

let willy = new myPersona.Person(100, 1.73, 2003,["Fernando Alonso", "leer manga"]);
let gabriel = new myPersona.Person(115, 1.90,2001, ["beber" , "biologia"]);
let jose = new myPersona.Person(64,1.71, 1998, ["Videojuegos", "Musica"]);
let josue = new myPersona.Person(104, 1.75, 1995, ["Magics", "Videojuegos"]);

// console.log(josue.calIMC())
console.log(clubDeGolf)
