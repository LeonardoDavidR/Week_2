let myPerson = require ("/.Person")

let Carlos = new myPerson.Person (90, 1.70, 1992, ["correr", "beber"])
console.log(Carlos)
console.log(Carlos.calIMC());
console.log(Carlos.calAge(1992));
console.log(Carlos.printHobbies());
console.log(Carlos.weigth);
console.log(Carlos.heigth);
console.log(Carlos.yearOfBirth);
console.log(Carlos.hobbies);
let contacto = new Contacts()
module.exports = {Contacts};
